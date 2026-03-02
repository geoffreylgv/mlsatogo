import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { videos } from "@/data/data";

export function VideosSection() {
  const { t, locale } = useLanguage();

  return (
    <section id="videos" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            {t.videos.title} <span className="gradient-text">{t.videos.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">{t.videos.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((v, i) => (
            <motion.a
              key={i}
              href={`https://youtube.com/watch?v=${v.id}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group glass rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={v.thumbnail} alt={locale === "fr" ? v.titleFr : v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center">
                    <Play className="h-7 w-7 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg">{locale === "fr" ? v.titleFr : v.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
            <a href="https://youtube.com/@msatogo" target="_blank" rel="noopener noreferrer">
              {t.videos.seeMore} <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
