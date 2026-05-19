import Link from "next/link";
import Image from "next/image";
import { Activity, Bot, Brain, CheckCircle, ChevronRight, Cpu, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const features = [
  {
    icon: Activity,
    title: "Live Focus Index",
    description:
      "Tokai reads your EEG in real time and computes a continuous Focus Index — no more guessing when you're in the zone or when you've hit a wall.",
  },
  {
    icon: Bot,
    title: "Agentic Task Planner",
    description:
      "An AI agent that proactively reorganizes your to-do list based on your current cognitive state, biological energy, and task difficulty.",
  },
  {
    icon: Cpu,
    title: "Multimodal Neurosupport",
    description:
      "Combines EEG data, biometrics, and software-level productivity signals to build a complete, empirical picture of your ADHD.",
  },
];

const steps = [
  {
    number: "01",
    title: "Connect your BCI headset",
    description:
      "Pair any consumer EEG headset with Tokai. We support multiple hardware configurations including Neurable, Muse, and OpenBCI.",
  },
  {
    number: "02",
    title: "AI reads your brain",
    description:
      "Our fine-tuned LUNA neural foundation model processes your EEG stream in real time, computing your Focus Index and detecting cognitive state shifts.",
  },
  {
    number: "03",
    title: "Your workflow adapts",
    description:
      "The Agentic Task Planner surfaces the right task at the right moment, silences distractions, and schedules deep work when your brain is ready.",
  },
];

const appFeatures = [
  {
    title: "Neural Dashboard",
    description:
      "Five live cognitive metrics — Focus Index, Bio Energy, Neural Noise, T/B Ratio, and Focus Window — updated every second. Includes Focus Stream, an interactive real-time chart for tracking your focus patterns over time.",
    image: "/screenshots/neural_dashboard.png",
    width: 1658,
    height: 456,
    wide: true,
  },
  {
    title: "TokAgent",
    description:
      "An AI assistant powered by Claude that analyzes your live brain data alongside your tasks and journal entries to provide personalized planning recommendations.",
    image: "/screenshots/tokagent.png",
    width: 773,
    height: 721,
  },
  {
    title: "TokToDo",
    description:
      "A task manager with cognitive demand classification (Low / Medium / High), time estimates, and deadline tracking — so your workload always matches your neural capacity.",
    image: "/screenshots/toktodo.png",
    width: 993,
    height: 900,
  },
  {
    title: "TokNote",
    description:
      "A journal with mood tagging and neural insights integration. Capture how you feel and let Tokai surface patterns across your cognitive states.",
    image: "/screenshots/toknote.png",
    width: 789,
    height: 724,
  },
  {
    title: "TokMed",
    description:
      "Medication and supplement tracking with timing reminders, so you never miss a dose and can correlate medication effects with your Focus Index.",
    image: "/screenshots/tokmed.png",
    width: 523,
    height: 376,
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
            Now in Pre-Alpha v0.1.0
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
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-400 to-violet-600 text-white border-0 hover:opacity-90 transition-opacity w-full sm:w-auto text-base px-8"
              >
                Get started free
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
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
              "Fine-tuned LUNA EEG foundation model",
              "Neuroethics & privacy-first",
            ].map((point) => (
              <span key={point} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-purple-400" />
                {point}
              </span>
            ))}
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
              Three steps from raw brainwaves to a smarter workday.
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
                Powered by a fine-tuned LUNA neural foundation model trained on
                21,000+ hours of EEG data, Tokai delivers a continuous,
                empirical Focus Index — not a self-report score, but a real
                neural signal.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Detect deep focus vs. cognitive fatigue in real time",
                  "Predict optimal focus windows before they happen",
                  "Track Alpha/Beta wave ratios and neural noise",
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

              <div className="grid grid-cols-3 gap-3">
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

              <div className="mt-4 bg-purple-400/10 border border-purple-400/20 rounded-xl p-3">
                <p className="text-sm text-purple-300 font-semibold mb-0.5">
                  LUNA AI Insight
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
              Inside Tokai v0.1.0
            </h2>
            <p className="text-lg text-[#c8d8e8] max-w-2xl mx-auto">
              Five integrated tools, all driven by your neural data.
            </p>
          </div>

          {/* Neural Dashboard — full width */}
          <div className="bg-[#100a25] border border-purple-400/15 rounded-2xl p-6 mb-6 shadow-lg shadow-purple-900/20">
            <h3 className="font-semibold text-[#e8f4ff] text-xl mb-1">
              {appFeatures[0].title}
            </h3>
            <p className="text-[#c8d8e8] text-base mb-5">
              {appFeatures[0].description}
            </p>
            <div className="rounded-xl overflow-hidden border border-purple-400/10">
              <Image
                src={appFeatures[0].image}
                alt={appFeatures[0].title}
                width={appFeatures[0].width}
                height={appFeatures[0].height}
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* 2×2 grid for remaining features */}
          <div className="grid md:grid-cols-2 gap-6">
            {appFeatures.slice(1).map((feature) => (
              <div
                key={feature.title}
                className="bg-[#100a25] border border-purple-400/15 rounded-2xl p-6 shadow-lg shadow-purple-900/20 flex flex-col gap-4"
              >
                <div>
                  <h3 className="font-semibold text-[#e8f4ff] text-lg mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-[#c8d8e8] text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden border border-purple-400/10 mt-auto">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={feature.width}
                    height={feature.height!}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
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
            Join the pre-alpha. Be among the first to experience neurosupport
            that actually works with your biology.
          </p>
          <a href="https://tokai-pre-alpha-tokai.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-400 to-violet-600 text-white border-0 hover:opacity-90 transition-opacity text-base px-10"
            >
              Sign up for early access
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </a>
          <p className="text-sm text-[#5a8fa8] mt-4">
            Free during pre-alpha · No credit card required
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
