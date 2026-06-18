"use client";
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  {
    title: "Neural Dashboard",
    description:
      "Nine live cognitive metrics — Focus Index, Sleep Quality, Bio Energy, Mental Fatigue, Working Memory Load, Neural Noise, T/B Ratio, Focus Window, and Hyperfocus Risk — each tagged with the data source driving it. BCI-only metrics dim automatically in self-report mode.",
    image: "/screenshots/dashboard.png",
    width: 1388,
    height: 396,
  },
  {
    title: "TokAgent",
    description:
      "A Claude-powered AI assistant that reads all nine neural metrics alongside your task list, journal, and medication log — then takes direct action via ten tool-calling actions. Uses Claude Sonnet 4.6 for planning, Haiku 4.5 for fast inline recommendations. Bring your own API key; it never touches Tokai's servers.",
    image: "/screenshots/tokagent.png",
    width: 1190,
    height: 640,
  },
  {
    title: "TokDo",
    description:
      "A focus-aware task manager where each task carries a cognitive demand score matched against your live Focus Index. Set time estimates, deadlines, and emoji tags — TokAgent uses all of this to surface the right task at the right moment.",
    image: "/screenshots/tokdo.png",
    width: 350,
    height: 895,
  },
  {
    title: "TokNote",
    description:
      "An ADHD-friendly journal with mood tagging and focus logging. Capture how you feel throughout the day and let TokInsights surface correlations between your journal entries and cognitive patterns over time.",
    image: "/screenshots/toknote.png",
    width: 616,
    height: 482,
  },
  {
    title: "TokMed",
    description:
      "Medication and supplement tracking with timestamp-anchored markers on your focus charts, so you can see exactly how each dose correlates with your cognitive state throughout the day.",
    image: "/screenshots/tokmed.png",
    width: 610,
    height: 482,
  },
  {
    title: "TokInsights",
    description:
      "Automatic, device-local analysis of your productivity patterns — when you focus best, mood correlations with task completion, and weekly cognitive trends. All analysis runs in your browser; no data leaves your device.",
    image: "/screenshots/tokinsights.png",
    width: 610,
    height: 482,
    isNew: true,
  },
];

export function AppFeatureCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -356 : 356, behavior: "smooth" });
  };

  return (
    <div className="flex items-start gap-3">
      <button
        onClick={() => scroll("left")}
        className="shrink-0 mt-[140px] w-10 h-10 rounded-full bg-[#120d28] border border-purple-400/20 flex items-center justify-center text-[#c8d8e8] hover:text-[#e8f4ff] hover:border-purple-400/50 transition-all shadow-md"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto flex-1 pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {features.map((feature) => (
          <div
            key={feature.title}
            className="shrink-0 w-[340px] bg-[#100a25] border border-purple-400/15 rounded-2xl p-5 shadow-lg shadow-purple-900/20 flex flex-col gap-4"
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-[#e8f4ff] text-lg">{feature.title}</h3>
                {feature.isNew && (
                  <span className="text-xs bg-purple-400/20 text-purple-300 border border-purple-400/30 rounded-full px-2 py-0.5 font-medium shrink-0">
                    New
                  </span>
                )}
              </div>
              <p className="text-[#c8d8e8] text-sm leading-relaxed">{feature.description}</p>
            </div>
            <div
              className="rounded-xl overflow-hidden border border-purple-400/10 bg-[#0c0818] flex items-center justify-center mt-auto"
              style={{ height: "220px" }}
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={feature.width}
                height={feature.height}
                className="max-h-[220px] max-w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="shrink-0 mt-[140px] w-10 h-10 rounded-full bg-[#120d28] border border-purple-400/20 flex items-center justify-center text-[#c8d8e8] hover:text-[#e8f4ff] hover:border-purple-400/50 transition-all shadow-md"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
