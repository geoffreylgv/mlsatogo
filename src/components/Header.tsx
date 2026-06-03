import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { headerPastEvents } from "@/data/data";

export function Header() {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/clients/MLSA.png" alt="MSA TOGO logo" className="h-9 w-9 rounded-lg" />
          <span className="font-display font-bold text-xl tracking-tight">MSA TOGO</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t.nav.about}
          </Link>

          <div className="relative" onMouseEnter={() => setEventsOpen(true)} onMouseLeave={() => setEventsOpen(false)}>
            <Link to="/#events" className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.events} <ChevronDown className="h-3 w-3" />
            </Link>
            <AnimatePresence>
              {eventsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute top-full left-0 mt-2 w-64 rounded-xl glass p-3 shadow-xl"
                >
                  <p className="text-xs font-semibold text-muted-foreground mb-2 px-2">{t.nav.pastEvents}</p>
                  {headerPastEvents.map((e) => (
                    <Link
                      key={e.title}
                      to="/#events"
                      className="flex justify-between items-center px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <span className="text-sm font-medium">{e.title}</span>
                      <span className="text-xs text-muted-foreground">{e.date}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/#videos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t.nav.videos}
          </Link>
          <Link to="/members" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t.nav.members}
          </Link>
          <Link to="/#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t.nav.contact}
          </Link>
          <Link to="/#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t.nav.faq}
          </Link>
          <LanguageToggle />
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden glass border-t border-border/50"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              <Link to="/#about" onClick={() => setMobileOpen(false)} className="py-2 text-sm font-medium">{t.nav.about}</Link>
              <Link to="/#events" onClick={() => setMobileOpen(false)} className="py-2 text-sm font-medium">{t.nav.events}</Link>
              <div className="pl-3 -mt-1 mb-1 border-l border-border/50 flex flex-col gap-2">
                <p className="text-xs font-semibold text-muted-foreground">{t.nav.pastEvents}</p>
                {headerPastEvents.map((e) => (
                  <Link
                    key={e.title}
                    to="/#events"
                    onClick={() => setMobileOpen(false)}
                    className="flex justify-between items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span>{e.title}</span>
                    <span className="text-xs whitespace-nowrap">{e.date}</span>
                  </Link>
                ))}
              </div>
              <Link to="/#videos" onClick={() => setMobileOpen(false)} className="py-2 text-sm font-medium">{t.nav.videos}</Link>
              <Link to="/members" onClick={() => setMobileOpen(false)} className="py-2 text-sm font-medium">{t.nav.members}</Link>
              <Link to="/#contact" onClick={() => setMobileOpen(false)} className="py-2 text-sm font-medium">{t.nav.contact}</Link>
              <Link to="/#faq" onClick={() => setMobileOpen(false)} className="py-2 text-sm font-medium">{t.nav.faq}</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
