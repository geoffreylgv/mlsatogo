import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { events } from "@/data/data";

export function EventsSection() {
  const { t } = useLanguage();
  const [tab, setTab] = useState<"past" | "upcoming">("past");
  const filtered = events.filter((e) => e.type === tab);

  return (
    <section id="events" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            <span className="gradient-text">{t.nav.events}</span>
          </h2>
        </motion.div>

        <div className="flex justify-center gap-2 mb-10">
          {(["past", "upcoming"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setTab(type)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                tab === type
                  ? "gradient-bg text-primary-foreground shadow-lg"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.events[type]}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-2 text-center text-muted-foreground py-12"
            >
              {t.events.noUpcoming}
            </motion.p>
          )}
          {filtered.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <Calendar className="h-3.5 w-3.5" />
                <span>{new Date(event.date).toLocaleDateString()}</span>
                <span className="mx-1">•</span>
                <MapPin className="h-3.5 w-3.5" />
                <span>{event.location}</span>
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{event.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
