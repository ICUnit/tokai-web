"use client";
import { createContext, useContext, useState } from "react";

export type Lang = "EN" | "ZH";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "EN",
  setLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("tokai-lang") as Lang) ?? "EN";
    }
    return "EN";
  });

  const handleSet = (l: Lang) => {
    setLang(l);
    if (typeof window !== "undefined") localStorage.setItem("tokai-lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang: handleSet }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
