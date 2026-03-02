import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { members } from "@/data/data";

type Tier = "all" | "new" | "beta" | "gold";

const tierColors: Record<string, string> = {
  new: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  beta: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  gold: "bg-amber-500/20 text-amber-400 border-amber-500/30",
};

const tierLabels: Record<string, string> = {
  new: "New",
  beta: "Beta",
  gold: "Gold",
};

export default function MembersPage() {
  const { t } = useLanguage();
  const [activeTier, setActiveTier] = useState<Tier>("all");

  const filtered = activeTier === "all" ? members : members.filter((m) => m.tier === activeTier);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-3xl md:text-5xl font-bold">
              {t.members.title} <span className="gradient-text">{t.members.titleHighlight}</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">{t.members.subtitle}</p>
          </motion.div>

          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {(["all", "gold", "beta", "new"] as Tier[]).map((tier) => (
              <button
                key={tier}
                onClick={() => setActiveTier(tier)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                  activeTier === tier
                    ? "gradient-bg text-primary-foreground border-transparent shadow-lg"
                    : "glass text-muted-foreground hover:text-foreground border-border/50"
                }`}
              >
                {tier === "all" ? t.members.all : tierLabels[tier]}
                <span className="ml-1.5 text-xs opacity-70">
                  ({tier === "all" ? members.length : members.filter((m) => m.tier === tier).length})
                </span>
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl p-6 text-center hover:shadow-xl transition-shadow group"
              >
                <div className="relative inline-block mb-4">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-background shadow-lg group-hover:scale-105 transition-transform"
                  />
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase border ${tierColors[member.tier]}`}
                  >
                    {tierLabels[member.tier]}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg">{member.name}</h3>
                {member.role && (
                  <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm mt-2 inline-block hover:underline"
                  >
                    LinkedIn
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
