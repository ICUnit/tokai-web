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
    const card = el.querySelector<HTMLElement>("[data-card]");
    const cardWidth = card ? card.offsetWidth + 24 : 600;
    el.scrollBy({ left: dir === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden">
      {/* Left edge fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0c0818] via-[#0c0818]/60 to-transparent pointer-events-none" />
      {/* Right edge fade — wider to show there's more */}
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#0c0818] via-[#0c0818]/60 to-transparent pointer-events-none" />

      {/* Left arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#120d28] border border-purple-400/25 flex items-center justify-center text-[#c8d8e8] hover:text-[#e8f4ff] hover:border-purple-400/60 transition-all shadow-lg"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      {/* Right arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#120d28] border border-purple-400/25 flex items-center justify-center text-[#c8d8e8] hover:text-[#e8f4ff] hover:border-purple-400/60 transition-all shadow-lg"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollSnapType: "x mandatory",
        }}
      >
        {features.map((feature, i) => (
          <div
            key={feature.title}
            data-card=""
            style={{ scrollSnapAlign: "center" }}
            className="shrink-0 w-[calc(100%-80px)] bg-[#100a25] border border-purple-400/15 rounded-2xl p-6 shadow-lg shadow-purple-900/20 flex flex-col gap-5"
          >
            {/* Title + description */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-[#e8f4ff] text-xl">{feature.title}</h3>
                {"isNew" in feature && feature.isNew && (
                  <span className="text-xs bg-purple-400/20 text-purple-300 border border-purple-400/30 rounded-full px-2 py-0.5 font-medium shrink-0">
                    New
                  </span>
                )}
              </div>
              <p className="text-[#c8d8e8] text-base leading-relaxed max-w-3xl">
                {feature.description}
              </p>
            </div>

            {/* Screenshot */}
            <div
              className="rounded-xl overflow-hidden border border-purple-400/10 bg-[#0c0818] flex items-center justify-center"
              style={{ height: i === 2 ? "480px" : "420px" }}
            >
              <Image
                src={images[i].src}
                alt={feature.title}
                width={images[i].width}
                height={images[i].height}
                className={
                  i === 2
                    ? "h-[480px] w-auto object-contain"
                    : "max-h-[420px] max-w-full object-contain"
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
