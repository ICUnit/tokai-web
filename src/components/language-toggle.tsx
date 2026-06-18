"use client";
import { useState } from "react";

export function LanguageToggle() {
  const [lang, setLang] = useState<"EN" | "ZH">("EN");
  return (
    <div className="flex items-center rounded-full border border-purple-400/20 overflow-hidden text-sm font-medium">
      <button
        onClick={() => setLang("EN")}
        className={`px-3 py-1.5 transition-colors ${
          lang === "EN"
            ? "bg-purple-400/20 text-[#e8f4ff]"
            : "text-[#5a8fa8] hover:text-[#c8d8e8]"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("ZH")}
        className={`px-3 py-1.5 transition-colors ${
          lang === "ZH"
            ? "bg-purple-400/20 text-[#e8f4ff]"
            : "text-[#5a8fa8] hover:text-[#c8d8e8]"
        }`}
      >
        中文
      </button>
    </div>
  );
}
