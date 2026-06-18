import Link from "next/link";
import Image from "next/image";
import { Activity, Bot, Brain, CheckCircle, ChevronRight, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AppFeatureCarousel } from "@/components/app-feature-carousel";

const features = [
  {
    icon: Activity,
    title: "Nine-Metric Neural Dashboard",
    description:
      "Track Focus Index, Bio Energy, Mental Fatigue, Working Memory Load, Theta/Beta Ratio, and four more cognitive signals — live. Works from a 30-second self-report, simulated data, research EEG datasets, or a real BCI headset.",
  },
  {
    icon: Bot,
    title: "Agentic Task Planner",
    description:
      "TokAgent (powered by Claude) reads all nine neural metrics alongside your tasks, journal, and medication log — then takes direct action in your workspace: creating tasks, starting timers, logging entries, all from a natural-language command.",
  },
  {
    icon: Shield,
    title: "Privacy-First Architecture",
    description:
      "Neural data never leaves your browser. All cognitive metrics are held in session memory only — never written to a server. Behavioral data (tasks, notes, medications) is isolated per-user via row-level security at the database level.",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose your data mode",
    description:
      "Start with a 30-second self-report check-in — no hardware required. Switch to simulated mode for demos, dataset replay for research, or plug in an EEG headset for live neural streaming.",
  },
  {
    number: "02",
    title: "Your cognitive state comes alive",
    description:
      "Nine metrics update in real time — Focus Index, Bio Energy, Mental Fatigue, Working Memory Load, and more — giving you an empirical picture of where your brain is right now.",
  },
  {
    number: "03",
    title: "TokAgent adapts your workflow",
    description:
      "The AI planner recommends the right task for your current cognitive state, executes commands directly in your workspace, and keeps a transparent audit trail of every action it takes.",
  },
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

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0c0818]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-purple-900 blur-3xl opacity-50" />
          <div className="absolute top-48 -left-24 w-72 h-72 rounded-full bg-violet-900 blur-3xl opacity-40" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-400/10 border border-purple-400/20 rounded-full px-4 py-1.5 text-base text-purple-300 mb-8 font-medium">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Now in Alpha v0.2.0
          </div>

          <p className="text-xl sm:text-2xl font-medium text-[#5a8fa8] mb-2">
            Theory of Knowledge,
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#e8f4ff] mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">A</span>ugmentable{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">I</span>ntelligence
          </h1>

          <p className="text-xl text-[#c8d8e8] max-w-2xl mx-auto mb-10 leading-relaxed">
            Tokai fuses EEG brain-computer interface data with agentic AI to
            help neurodivergent minds focus, plan, and perform — continuously
            and empirically.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://go.tokai.app" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-400 to-violet-600 text-white border-0 hover:opacity-90 transition-opacity w-full sm:w-auto text-base px-8"
              >
                Get started free
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
            <Link href="#how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base px-8 border-purple-400/30 text-[#c8d8e8] hover:border-purple-400/60 bg-transparent hover:bg-purple-400/5"
              >
                See how it works
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-base text-[#c8d8e8]">
            {[
              "NTU Master's research project",
              "Open source · Apache 2.0",
              "Neuroethics & privacy-first",
            ].map((point) => (
              <span key={point} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                {point}
              </span>
            ))}
          </div>
        </div>

        {/* Hero app preview */}
        <div className="relative max-w-5xl mx-auto mt-16">
          <div className="rounded-2xl overflow-hidden border border-purple-400/20 shadow-2xl shadow-purple-900/40">
            <Image
              src="/screenshots/dashboard.png"
              alt="Tokai Neural Dashboard"
              width={1388}
              height={396}
              className="w-full object-cover"
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
              Built for how your brain actually works
            </h2>
            <p className="text-lg text-[#c8d8e8] max-w-2xl mx-auto">
              Traditional productivity tools ignore your biology. Tokai reads it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-[#120d28] rounded-2xl p-7 border border-purple-400/10 shadow-sm hover:shadow-purple-900/30 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-400 to-violet-600 flex items-center justify-center mb-5 shadow-sm">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-[#e8f4ff] text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#c8d8e8] leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#e8f4ff] mb-4">
              How Tokai works
            </h2>
            <p className="text-lg text-[#c8d8e8] max-w-2xl mx-auto">
              Three steps from cognitive state awareness to a smarter workday.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col gap-4">
                <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent leading-none">
                  {step.number}
                </span>
                <h3 className="font-semibold text-[#e8f4ff] text-lg">
                  {step.title}
                </h3>
                <p className="text-[#c8d8e8] text-base leading-relaxed">
                  {step.description}
                </p>
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
                What you&apos;ll see
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#e8f4ff] mb-5">
                Your Focus Index,{" "}
                <span className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
                  live.
                </span>
              </h2>
              <p className="text-[#c8d8e8] leading-relaxed mb-6 text-base">
                Tokai computes a continuous Focus Index from your chosen data
                source — self-report, simulated, EEG dataset replay, or live
                BCI — giving you an empirical cognitive baseline without
                requiring any hardware to get started.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Detect deep focus vs. cognitive fatigue in real time",
                  "Track Alpha/Beta wave ratios and neural noise",
                  "See hyperfocus risk and estimated focus window duration",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-base text-[#c8d8e8]"
                  >
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mock dashboard card */}
            <div className="bg-[#120d28] rounded-2xl border border-purple-400/15 shadow-lg shadow-purple-900/20 p-6">
              <div className="flex items-center justify-between mb-5">
                <p className="text-base font-semibold text-[#c8d8e8]">Focus Index</p>
                <span className="text-sm bg-green-400/10 text-green-400 border border-green-400/20 rounded-full px-2.5 py-0.5 font-medium">
                  Live
                </span>
              </div>
              <div className="flex items-end gap-2 mb-3">
                <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
                  84
                </span>
                <span className="text-[#5a8fa8] text-base mb-2">/ 100</span>
              </div>
              <div className="w-full h-2 bg-[#0c0818] rounded-full mb-1">
                <div className="h-2 rounded-full bg-gradient-to-r from-purple-400 to-violet-600 w-[84%]" />
              </div>
              <p className="text-sm text-[#5a8fa8] mb-5">
                Optimal focus window · 38 min remaining
              </p>

              <div className="grid grid-cols-3 gap-3 mb-3">
                {[
                  { label: "Bio Energy", value: "72%" },
                  { label: "Neural Noise", value: "Low" },
                  { label: "α/β Ratio", value: "0.41" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-[#0c0818] rounded-xl p-3 text-center"
                  >
                    <p className="text-sm text-[#5a8fa8] mb-1">{metric.label}</p>
                    <p className="font-semibold text-[#e8f4ff] text-base">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Mental Fatigue", value: "31" },
                  { label: "WM Load", value: "42" },
                  { label: "Hyperfocus", value: "12%" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-[#0c0818] rounded-xl p-3 text-center"
                  >
                    <p className="text-sm text-[#5a8fa8] mb-1">{metric.label}</p>
                    <p className="font-semibold text-[#e8f4ff] text-base">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-purple-400/10 border border-purple-400/20 rounded-xl p-3">
                <p className="text-sm text-purple-300 font-semibold mb-0.5">
                  TokAgent
                </p>
                <p className="text-sm text-[#c8d8e8]">
                  High focus detected. Recommend starting your most cognitively
                  demanding task now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section id="app" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#e8f4ff] mb-4">
              Inside Tokai v0.2.0
            </h2>
            <p className="text-lg text-[#c8d8e8] max-w-2xl mx-auto">
              Six integrated tools, all driven by your neural data.
            </p>
          </div>
          <AppFeatureCarousel />
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 px-6 bg-[#100a25]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#e8f4ff] mb-4">
              Team
            </h2>
            <p className="text-lg text-[#c8d8e8] max-w-xl mx-auto">
              Researchers and engineers from NTU, NYCU, Temple, and beyond.
            </p>
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
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#e8f4ff] text-lg group-hover:text-purple-300 transition-colors">{member.name}</p>
                  <p className="text-base text-purple-400 mb-0.5">{member.role}</p>
                  <p className="text-base text-[#5a8fa8]">{member.affiliation}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-[#080614]">
        <div className="max-w-3xl mx-auto text-center">
          <Brain className="w-12 h-12 mx-auto mb-6 text-purple-400" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#e8f4ff] mb-4">
            Ready to understand your brain?
          </h2>
          <p className="text-[#c8d8e8] text-lg mb-8 max-w-xl mx-auto">
            Join the alpha. Be among the first to experience neurosupport
            that actually works with your biology.
          </p>
          <a href="https://go.tokai.app" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-400 to-violet-600 text-white border-0 hover:opacity-90 transition-opacity text-base px-10"
            >
              Sign up for early access
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </a>
          <p className="text-sm text-[#5a8fa8] mt-4">
            Free during alpha · No credit card required
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
