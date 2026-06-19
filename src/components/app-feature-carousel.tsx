"use client";
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/contexts/lang";
import { t } from "@/lib/translations";

const images = [
  { src: "/screenshots/dashboard.png", width: 1388, height: 396 },
  { src: "/screenshots/tokagent.png",  width: 1190, height: 640 },
  { src: "/screenshots/tokdo.png",     width: 350,  height: 895 },
  { src: "/screenshots/toknote.png",   width: 616,  height: 482 },
  { src: "/screenshots/tokmed.png",    width: 610,  height: 482 },
  { src: "/screenshots/tokinsights.png", width: 610, height: 482 },
];

export function AppFeatureCarousel() {
  const { lang } = useLang();
  const features = t[lang].carousel;
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -556 : 556, behavior: "smooth" });
  };

  return (
    <div className="flex items-start gap-3">
      <button
        onClick={() => scroll("left")}
        className="shrink-0 mt-[160px] w-10 h-10 rounded-full bg-[#120d28] border border-purple-400/20 flex items-center justify-center text-[#c8d8e8] hover:text-[#e8f4ff] hover:border-purple-400/50 transition-all shadow-md"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto flex-1 pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className="shrink-0 w-[520px] bg-[#100a25] border border-purple-400/15 rounded-2xl p-6 shadow-lg shadow-purple-900/20 flex flex-col gap-4"
          >
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <h3 className="font-semibold text-[#e8f4ff] text-xl">{feature.title}</h3>
                {"isNew" in feature && feature.isNew && (
                  <span className="text-xs bg-purple-400/20 text-purple-300 border border-purple-400/30 rounded-full px-2 py-0.5 font-medium shrink-0">
                    New
                  </span>
                )}
              </div>
              <p className="text-[#c8d8e8] text-sm leading-relaxed">{feature.description}</p>
            </div>
            <div
              className="rounded-xl overflow-hidden border border-purple-400/10 bg-[#0c0818] flex items-center justify-center mt-auto"
              style={{ height: "300px" }}
            >
              <Image
                src={images[i].src}
                alt={feature.title}
                width={images[i].width}
                height={images[i].height}
                className="max-h-[300px] max-w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="shrink-0 mt-[160px] w-10 h-10 rounded-full bg-[#120d28] border border-purple-400/20 flex items-center justify-center text-[#c8d8e8] hover:text-[#e8f4ff] hover:border-purple-400/50 transition-all shadow-md"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
