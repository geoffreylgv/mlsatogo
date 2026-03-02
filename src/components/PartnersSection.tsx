import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { partners } from "@/data/data";

export function PartnersSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 border-t border-b border-border/50">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-muted-foreground mb-10 uppercase tracking-widest"
        >
          {t.partners.title}
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {partners.map((p, i) => (
            <motion.img
              key={p.name}
              src={p.logo}
              alt={p.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-14 md:h-20 object-contain opacity-70 hover:opacity-100 transition-opacity dark:brightness-0 dark:invert dark:opacity-60 dark:hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
