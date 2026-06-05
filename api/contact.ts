// Vercel serverless (Edge) function: receives contact-form submissions from the
// MSA Togo site and emails them to the club inbox via Resend.
//
// It is same-origin with the SPA (/api/contact), so the browser sends a plain
// POST with no CORS preflight, no third-party domain restrictions, and no
// activation step. The Resend API key stays server-side (never shipped to the
// browser). Set RESEND_API_KEY in the Vercel project environment variables.

export const config = { runtime: "edge" };

const TO_EMAIL = "mlsatogo.club@gmail.com";
// Resend lets you send from this shared address with no domain setup. Swap it
// for an address on a verified domain (e.g. contact@msatogo.org) once you have one.
const FROM_EMAIL = "MSA Togo <onboarding@resend.dev>";

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return json({ success: false, error: "Method not allowed" }, 405);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return json({ success: false, error: "Email service not configured" }, 500);
  }

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return json({ success: false, error: "Invalid request body" }, 400);
  }

  // Honeypot: real users never fill this. Pretend success so bots get no signal.
  if (body.botcheck) {
    return json({ success: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const subject = String(body.subject ?? "").trim() || "New message";
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return json({ success: false, error: "Missing required fields" }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ success: false, error: "Invalid email address" }, 400);
  }

  // Plain text only — no HTML interpolation, so nothing to escape/inject.
  const text =
    "New message from the MSA Togo website\n\n" +
    `Name:    ${name}\n` +
    `Email:   ${email}\n` +
    `Subject: ${subject}\n\n` +
    `${message}\n`;

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      reply_to: email,
      subject: `[MSA Togo] ${subject}`,
      text,
    }),
  });

  if (!resendRes.ok) {
    const detail = await resendRes.text().catch(() => "");
    return json({ success: false, error: "Failed to send message", detail }, 502);
  }

  return json({ success: true });
}
