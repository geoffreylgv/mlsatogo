import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Rocket } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [BookOpen, Lightbulb, Rocket];

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            {t.about.title} <span className="gradient-text">{t.about.titleHighlight}</span> ?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">{t.about.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.about.features.map((f, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group glass rounded-2xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
