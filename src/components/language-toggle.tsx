"use client";
import { useState } from "react";

export function LanguageToggle() {
  const [lang, setLang] = useState<"EN" | "ZH">("EN");
  return (
    <button
      onClick={() => setLang(lang === "EN" ? "ZH" : "EN")}
      className="text-sm font-medium text-[#c8d8e8] hover:text-[#e8f4ff] border border-purple-400/20 rounded-full px-3 py-1.5 hover:border-purple-400/40 transition-colors"
    >
      {lang === "EN" ? "EN | 中" : "中 | EN"}
    </button>
  );
}
