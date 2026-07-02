"use client";
import Image from "next/image";
import { Activity, Bot, Brain, CheckCircle, ChevronRight, Shield, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppFeatureCarousel } from "@/components/app-feature-carousel";
import { useLang } from "@/contexts/lang";
import { t } from "@/lib/translations";

const featureIcons = [Activity, Bot, Shield];

const contributors: { name: string; affiliation?: string; photo?: string }[] = [
  { name: "Bernadette Harding",  photo: "/contributors/bernie.jpg" },
  { name: "Farley Warner",       photo: "/contributors/farley.jpg" },
  { name: "Robert Harding" },
  { name: "Stella Liu",          photo: "/contributors/stella.jpg" },
  { name: "Alexander André",     photo: "/contributors/alex.jpg" },
  { name: "Ting-Wan Wu",         photo: "/contributors/rolan.jpg" },
  { name: "Mickey Osborne",      photo: "/contributors/mickey.jpg" },
  { name: "Winson Widyanata" },
  { name: "Lauren Dravis",       photo: "/contributors/lauren.jpg" },
  { name: "Alexander Frankish",  photo: "/contributors/alexander.jpg" },
  { name: "Samuel Yang",         photo: "/contributors/samuel.jpg" },
];

const team = [
  {
    name: "Seth Austin Harding",
    role: "Founder & Lead Researcher",
    affiliation: "NTU CSIE",
    photo: "/team/austin.jpg",
    link: "https://www.linkedin.com/in/austin-hua",
  },
  {
    name: "Prof. Shih-Wei Liao",
    role: "Supervisor",
    affiliation: "National Taiwan University",
    photo: "/team/liao.jpg",
    photoPosition: "center 20%",
    link: "https://www.csie.ntu.edu.tw/~liao/",
  },
  {
    name: "Prof. Li-Wei Ko",
    role: "BCI Research Advisor",
    affiliation: "NYCU Brain Research Center",
    photo: "/team/ko.png",
    link: "https://scholar.nycu.edu.tw/en/persons/li-wei-ko/",
  },
  {
    name: "Prof. Ming-Fong Sie",
    role: "Research Advisor",
    affiliation: "Chung Yuan Christian University",
    photo: "/team/sie.jpeg",
    link: "https://www.linkedin.com/in/siemingfong/",
  },
  {
    name: "Hao-Yuan Chen",
    role: "AI & SaaS Advisor",
    affiliation: "Mindify AI · University of London",
    photo: "/team/mark.jpg",
    link: "https://www.linkedin.com/in/mark-chen-next/",
  },
  {
    name: "Tony Siu",
    role: "AI Advisor",
    affiliation: "Temple University",
    photo: "/team/tony.jpeg",
    link: "https://www.linkedin.com/in/pysolver/",
  },
];

export function LandingContent() {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <div className="flex flex-col min-h-screen bg-[#0c0818]">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-purple-900 blur-3xl opacity-50" />
          <div className="absolute top-48 -left-24 w-72 h-72 rounded-full bg-violet-900 blur-3xl opacity-40" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <a
            href="https://github.com/TokaiApp/Tokai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-400/10 border border-purple-400/20 rounded-full px-4 py-1.5 text-base text-purple-300 mb-8 font-medium hover:bg-purple-400/20 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            {tx.hero.badge}
          </a>

          <p className="text-xl sm:text-2xl font-medium text-[#5a8fa8] mb-2">
            {tx.hero.subtitle}
          </p>

          {lang === "EN" ? (
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#e8f4ff] mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
                {tx.hero.headingA}
              </span>
              {tx.hero.headingRest1}
              <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
                {tx.hero.headingI}
              </span>
              {tx.hero.headingRest2}
            </h1>
          ) : (
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
                {(tx.hero as { headingZH?: string }).headingZH}
              </span>
            </h1>
          )}

          <p className="text-xl text-[#c8d8e8] max-w-2xl mx-auto mb-10 leading-relaxed">
            {tx.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://go.tokai.app" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-400 to-violet-600 text-white border-0 hover:opacity-90 transition-opacity w-full sm:w-auto text-base px-8"
              >
                {tx.hero.cta1}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
            <a href="#how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base px-8 border-purple-400/30 text-[#c8d8e8] hover:border-purple-400/60 bg-transparent hover:bg-purple-400/5"
              >
                {tx.hero.cta2}
              </Button>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-base text-[#c8d8e8]">
            {tx.hero.trust.map((point) => (
              <span key={point} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                {point}
              </span>
            ))}
            <a
              href="https://github.com/TokaiApp/Tokai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#e8f4ff] transition-colors group"
            >
              <Star className="w-4 h-4 text-yellow-400 group-hover:fill-yellow-400 transition-all" />
              {lang === "EN" ? "Star us on GitHub" : "在 GitHub 給我們星星"}
            </a>
          </div>
        </div>

        {/* Hero banner */}
        <div className="relative max-w-5xl mx-auto mt-12">
          <div className="rounded-2xl overflow-hidden border border-purple-400/20 shadow-2xl shadow-purple-900/40 h-[360px]">
            <Image
              src="/tokbanner.png"
              alt="Tokai app preview"
              width={1402}
              height={1122}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-[#100a25]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#e8f4ff] mb-4">
              {tx.features.heading}
            </h2>
            <p className="text-lg text-[#c8d8e8] max-w-2xl mx-auto">
              {tx.features.subtext}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tx.features.items.map((feature, i) => {
              const Icon = featureIcons[i];
              return (
                <div
                  key={feature.title}
                  className="bg-[#120d28] rounded-2xl p-7 border border-purple-400/10 shadow-sm hover:shadow-purple-900/30 hover:shadow-md transition-shadow"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-400 to-violet-600 flex items-center justify-center mb-5 shadow-sm">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-[#e8f4ff] text-lg mb-2">{feature.title}</h3>
                  <p className="text-[#c8d8e8] leading-relaxed text-base">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#e8f4ff] mb-4">
              {tx.steps.heading}
            </h2>
            <p className="text-lg text-[#c8d8e8] max-w-2xl mx-auto">
              {tx.steps.subtext}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {tx.steps.items.map((step, i) => (
              <div key={i} className="flex flex-col gap-4">
                <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-[#e8f4ff] text-lg">{step.title}</h3>
                <p className="text-[#c8d8e8] text-base leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Index preview */}
      <section className="py-24 px-6 bg-[#100a25]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-400/10 border border-purple-400/20 rounded-full px-3 py-1 text-sm text-purple-300 mb-5 font-medium">
                <Zap className="w-3 h-3" />
                {tx.focusPreview.badge}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#e8f4ff] mb-5">
                {tx.focusPreview.heading1}
                <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
                  {tx.focusPreview.headingGradient}
                </span>
              </h2>
              <p className="text-[#c8d8e8] leading-relaxed mb-6 text-base">
                {tx.focusPreview.description}
              </p>
              <ul className="flex flex-col gap-3">
                {tx.focusPreview.bullets.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-base text-[#c8d8e8]">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#120d28] rounded-2xl border border-purple-400/15 shadow-lg shadow-purple-900/20 p-6">
              <div className="flex items-center justify-between mb-5">
                <p className="text-base font-semibold text-[#c8d8e8]">{tx.focusPreview.cardTitle}</p>
                <span className="text-sm bg-green-400/10 text-green-400 border border-green-400/20 rounded-full px-2.5 py-0.5 font-medium">
                  {tx.focusPreview.cardLive}
                </span>
              </div>
              <div className="flex items-end gap-2 mb-3">
                <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">84</span>
                <span className="text-[#5a8fa8] text-base mb-2">/ 100</span>
              </div>
              <div className="w-full h-2 bg-[#0c0818] rounded-full mb-1">
                <div className="h-2 rounded-full bg-gradient-to-r from-purple-400 to-violet-600 w-[84%]" />
              </div>
              <p className="text-sm text-[#5a8fa8] mb-5">{tx.focusPreview.cardWindow}</p>

              <div className="grid grid-cols-3 gap-3 mb-3">
                {tx.focusPreview.metrics1.map((m) => (
                  <div key={m.label} className="bg-[#0c0818] rounded-xl p-3 text-center">
                    <p className="text-sm text-[#5a8fa8] mb-1">{m.label}</p>
                    <p className="font-semibold text-[#e8f4ff] text-base">{m.value}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {tx.focusPreview.metrics2.map((m) => (
                  <div key={m.label} className="bg-[#0c0818] rounded-xl p-3 text-center">
                    <p className="text-sm text-[#5a8fa8] mb-1">{m.label}</p>
                    <p className="font-semibold text-[#e8f4ff] text-base">{m.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-purple-400/10 border border-purple-400/20 rounded-xl p-3">
                <p className="text-sm text-purple-300 font-semibold mb-0.5">{tx.focusPreview.agentLabel}</p>
                <p className="text-sm text-[#c8d8e8]">{tx.focusPreview.agentText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section id="app" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#e8f4ff] mb-4">{tx.app.heading}</h2>
            <p className="text-lg text-[#c8d8e8] max-w-2xl mx-auto">{tx.app.subtext}</p>
          </div>
          <AppFeatureCarousel />
        </div>
      </section>

      {/* Core Team */}
      <section id="team" className="py-24 px-6 bg-[#100a25]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#e8f4ff] mb-4">{tx.team.heading}</h2>
            <p className="text-lg text-[#c8d8e8] max-w-xl mx-auto">{tx.team.subtext}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {team.map((member) => (
              <a
                key={member.name}
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#120d28] border border-purple-400/10 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-purple-400/30 transition-all flex items-center gap-5 group"
              >
                <div className="relative w-24 h-24 shrink-0 rounded-full overflow-hidden border-2 border-purple-400/20 group-hover:border-purple-400/50 transition-colors">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                    style={member.photoPosition ? { objectPosition: member.photoPosition } : undefined}
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#e8f4ff] text-lg group-hover:text-purple-300 transition-colors">
                    {member.name}
                  </p>
                  <p className="text-base text-purple-400 mb-0.5">{member.role}</p>
                  <p className="text-base text-[#5a8fa8]">{member.affiliation}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contributors */}
      <section id="contributors" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#e8f4ff] mb-4">
              {lang === "EN" ? "Contributors" : "貢獻者"}
            </h2>
            <p className="text-lg text-[#c8d8e8] max-w-xl mx-auto">
              {lang === "EN"
                ? "Early adopters who helped shape Tokai by completing our research questionnaire."
                : "透過填寫研究問卷協助塑造 Tokai 的早期使用者。"}
            </p>
          </div>

          {contributors.length === 0 ? (
            <div className="bg-[#100a25] border border-purple-400/10 rounded-2xl p-12 text-center">
              <p className="text-[#c8d8e8] text-base mb-6">
                {lang === "EN"
                  ? "Contributor listings will appear here as early adopters complete our questionnaire."
                  : "早期使用者完成問卷後，貢獻者名單將顯示於此。"}
              </p>
              <a
                href="https://go.tokai.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-400/10 border border-purple-400/20 hover:bg-purple-400/20 transition-colors rounded-full px-5 py-2 text-sm text-purple-300 font-medium"
              >
                {lang === "EN" ? "Try Tokai & fill the questionnaire" : "試用 Tokai 並填寫問卷"}
              </a>
            </div>
          ) : (
            <div className="flex flex-wrap gap-5 justify-center">
              {contributors.map((c) => (
                <div
                  key={c.name}
                  className="bg-[#120d28] border border-purple-400/10 rounded-2xl p-6 shadow-sm flex flex-col items-center gap-3 w-40"
                >
                  <div className="relative w-24 h-24 shrink-0 rounded-full overflow-hidden border-2 border-purple-400/20">
                    {c.photo ? (
                      <Image src={c.photo} alt={c.name} fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-400 to-violet-600 flex items-center justify-center text-white text-xl font-bold">
                        {c.name[0]}
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-[#e8f4ff] text-sm">{c.name}</p>
                    {c.affiliation && (
                      <p className="text-xs text-[#5a8fa8] mt-0.5">{c.affiliation}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-[#080614]">
        <div className="max-w-3xl mx-auto text-center">
          <Brain className="w-12 h-12 mx-auto mb-6 text-purple-400" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e8f4ff] mb-4">{tx.cta.heading}</h2>
          <p className="text-[#c8d8e8] text-lg mb-8 max-w-xl mx-auto">{tx.cta.description}</p>
          <a href="https://go.tokai.app" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-400 to-violet-600 text-white border-0 hover:opacity-90 transition-opacity text-base px-10"
            >
              {tx.cta.button}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </a>
          <p className="text-sm text-[#5a8fa8] mt-4">{tx.cta.subtext}</p>
        </div>
      </section>
    </div>
  );
}
