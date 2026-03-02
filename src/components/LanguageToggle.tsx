import { useLanguage } from "@/i18n/LanguageContext";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setLocale(locale === "en" ? "fr" : "en")}
      className="rounded-full"
      title={locale === "en" ? "Passer en français" : "Switch to English"}
    >
      <Globe className="h-5 w-5" />
      <span className="sr-only">{locale === "en" ? "FR" : "EN"}</span>
      <span className="absolute -bottom-0.5 -right-0.5 text-[10px] font-bold bg-primary text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center">
        {locale === "en" ? "FR" : "EN"}
      </span>
    </Button>
  );
}
