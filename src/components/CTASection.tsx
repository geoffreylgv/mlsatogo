import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl gradient-bg p-12 md:p-20 text-center"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-foreground/5" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              {t.cta.title}
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-10">
              {t.cta.subtitle}
            </p>
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 rounded-full px-10 text-base font-semibold"
              asChild
            >
              <a href="https://mvp.microsoft.com/studentambassadors?wt.mc_id=studentamb_252175" target="_blank" rel="noopener noreferrer">
                {t.cta.applyNow} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
