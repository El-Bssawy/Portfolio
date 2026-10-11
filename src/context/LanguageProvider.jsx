import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./language";
import { content } from "../data/content";

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    () => localStorage.getItem("lang") || "en",
  );

  const t = content[lang];

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
  }, [lang, t.dir]);

  const value = useMemo(
    () => ({
      lang,
      dir: t.dir,
      t,
      toggleLang: () => setLang((prev) => (prev === "en" ? "ar" : "en")),
    }),
    [lang, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
