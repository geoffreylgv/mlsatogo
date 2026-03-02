import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      <div className="absolute top-20 -left-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-20 -right-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full gradient-bg" />
            {t.hero.badge}
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight max-w-4xl mx-auto">
            {t.hero.title}{" "}
            <span className="gradient-text">{t.hero.titleHighlight}</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gradient-bg text-primary-foreground px-8 text-base font-semibold rounded-full hover:opacity-90 transition-opacity" asChild>
              <a href="https://mvp.microsoft.com/studentambassadors?wt.mc_id=studentamb_252175" target="_blank" rel="noopener noreferrer">
                {t.hero.applyNow} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-base" asChild>
              <a href="#about">{t.hero.learnMore}</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative">
            <div className="flex -space-x-4">
              {["geo.png", "ghislain.jpg", "wasscodeur.jpg", "pakou.jpg", "samadou.jpg"].map((img, i) => (
                <img
                  key={img}
                  src={`/images/avatars/${img}`}
                  alt="MSA Member"
                  className="w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-background object-cover shadow-xl"
                  style={{ zIndex: 5 - i }}
                />
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground font-medium">{t.hero.activeBadge}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
