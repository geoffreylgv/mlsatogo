import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";

// Web3Forms access key, read from the environment.
// Set VITE_WEB3FORMS_ACCESS_KEY in .env (local) and in the Vercel project
// settings (production). The key is safe to expose client-side; it only routes
// submissions to the inbox configured at web3forms.com.
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      toast({ variant: "destructive", title: t.contact.error, description: t.contact.errorDescription });
      return;
    }

    setSubmitting(true);
    try {
      // Use FormData (multipart) so the request stays a CORS "simple request"
      // with no preflight OPTIONS, matching the official Web3Forms example.
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("subject", `[MSA Togo] ${form.subject}`);
      formData.append("message", form.message);
      formData.append("from_name", "MSA Togo website");
      formData.append("replyto", form.email);

      // Honeypot: only set when a bot ticked the hidden checkbox.
      const botcheck = (e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement)?.checked;
      if (botcheck) formData.append("botcheck", "true");

      const res = await fetch(WEB3FORMS_ENDPOINT, { method: "POST", body: formData });
      const data = await res.json();

      if (data.success) {
        toast({ title: t.contact.sent, description: t.contact.sentDescription });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({ variant: "destructive", title: t.contact.error, description: t.contact.errorDescription });
      }
    } catch {
      toast({ variant: "destructive", title: t.contact.error, description: t.contact.errorDescription });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            <span className="gradient-text">{t.contact.title}</span> {t.contact.titleHighlight}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.contact.subtitle}</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-8 space-y-5"
        >
          {/* Honeypot field, hidden from users, ignored by humans, caught by Web3Forms. */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="grid sm:grid-cols-2 gap-5">
            <Input placeholder={t.contact.name} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="rounded-xl" />
            <Input type="email" placeholder={t.contact.email} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="rounded-xl" />
          </div>
          <Input placeholder={t.contact.subject} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required className="rounded-xl" />
          <Textarea placeholder={t.contact.message} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={5} className="rounded-xl" />
          <Button type="submit" size="lg" disabled={submitting} className="w-full rounded-xl gradient-bg text-primary-foreground font-semibold">
            {submitting ? (
              <>
                {t.contact.sending} <Loader2 className="ml-2 h-4 w-4 animate-spin" />
              </>
            ) : (
              <>
                {t.contact.send} <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
