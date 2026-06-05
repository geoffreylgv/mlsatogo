import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const botcheck = (e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement)?.checked;

      // Same-origin call to our own Vercel function (api/contact.ts), which
      // sends the email via Resend. No CORS, no third-party form service.
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, botcheck }),
      });
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
          {/* Honeypot field, hidden from users, ignored by humans, caught server-side. */}
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
