import { Github, Youtube, Twitter, Linkedin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/50 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/images/clients/MLSA.png" alt="MSA" className="h-8 w-8 rounded-lg" />
          <span className="font-display font-bold">MSA TOGO</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} MSA Togo. {t.footer.rights}
        </p>
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com/company/msa-togo" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://youtube.com/@msatogo" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Youtube className="h-5 w-5" />
          </a>
          <a href="https://twitter.com/mlsatogo" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
