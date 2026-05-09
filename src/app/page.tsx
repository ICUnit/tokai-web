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

const team = [
  {
    name: "Seth Austin Harding",
    role: "Founder & Researcher",
    affiliation: "NTU CSIE · R11922203",
    photo: "/team/austin.jpg",
  },
  {
    name: "Prof. Shih-Wei Liao",
    role: "Research Advisor",
    affiliation: "National Taiwan University",
    photo: "/team/liao.jpg",
  },
  {
    name: "Prof. Li-Wei Ko",
    role: "BCI Research Advisor",
    affiliation: "NYCU Brain Research Center",
    photo: "/team/ko.png",
  },
  {
    name: "Prof. Ming-Fong Sie",
    role: "Research Advisor",
    affiliation: "Chung Yuan Christian University",
    photo: "/team/sie.jpg",
  },
  {
    name: "Hao-Yuan Chen",
    role: "Hardware & Design",
    affiliation: "Mindify AI · University of London",
    photo: "/team/mark.jpg",
  },
  {
    name: "Tony Siu",
    role: "EEG Model Research",
    affiliation: "Temple University",
    photo: "/team/tony.jpeg",
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-violet-100 blur-3xl opacity-60" />
          <div className="absolute top-48 -left-24 w-72 h-72 rounded-full bg-pink-100 blur-3xl opacity-50" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 rounded-full px-4 py-1.5 text-sm text-violet-700 mb-8 font-medium">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            Now in pre-alpha · BCI + AI for ADHD
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            Your mind,{" "}
            <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
              augmented.
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Tokai fuses EEG brain-computer interface data with agentic AI to
            help neurodivergent minds focus, plan, and perform — continuously
            and empirically.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-500 to-pink-500 text-white border-0 hover:opacity-90 transition-opacity w-full sm:w-auto text-base px-8"
              >
                Get started free
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base px-8 border-gray-200 text-gray-700 hover:border-gray-300"
              >
                See how it works
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            {[
              "NTU Master's research project",
              "Fine-tuned LUNA EEG foundation model",
              "Neuroethics & privacy-first",
            ].map((point) => (
              <span key={point} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-violet-400" />
                {point}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built for how your brain actually works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Traditional productivity tools ignore your biology. Tokai reads it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center mb-5 shadow-sm">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How Tokai works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three steps from raw brainwaves to a smarter workday.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col gap-4">
                <span className="text-5xl font-bold bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent leading-none">
                  {step.number}
                </span>
                <h3 className="font-semibold text-gray-900 text-lg">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Index preview */}
      <section className="py-24 px-6 bg-gradient-to-br from-violet-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white border border-violet-200 rounded-full px-3 py-1 text-xs text-violet-700 mb-5 font-medium">
                <Zap className="w-3 h-3" />
                What you&apos;ll see
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
                Your Focus Index,{" "}
                <span className="bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
                  live.
                </span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
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
                    className="flex items-start gap-2.5 text-sm text-gray-600"
                  >
                    <CheckCircle className="w-4 h-4 text-violet-500 mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mock dashboard card */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
              <div className="flex items-center justify-between mb-5">
                <p className="text-sm font-semibold text-gray-700">Focus Index</p>
                <span className="text-xs bg-green-50 text-green-600 border border-green-200 rounded-full px-2.5 py-0.5 font-medium">
                  Live
                </span>
              </div>
              <div className="flex items-end gap-2 mb-3">
                <span className="text-5xl font-bold bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
                  84
                </span>
                <span className="text-gray-400 text-sm mb-2">/ 100</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full mb-1">
                <div className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 w-[84%]" />
              </div>
              <p className="text-xs text-gray-400 mb-5">
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
                    className="bg-gray-50 rounded-xl p-3 text-center"
                  >
                    <p className="text-xs text-gray-400 mb-1">{metric.label}</p>
                    <p className="font-semibold text-gray-900 text-sm">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-violet-50 border border-violet-100 rounded-xl p-3">
                <p className="text-xs text-violet-800 font-semibold mb-0.5">
                  LUNA AI Insight
                </p>
                <p className="text-xs text-violet-700">
                  High focus detected. Recommend starting your most cognitively
                  demanding task now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The team
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Researchers and engineers from NTU, Caltech, Temple, and beyond.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
              >
                <div className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden border-2 border-violet-100">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{member.name}</p>
                  <p className="text-sm text-violet-600 mb-0.5">{member.role}</p>
                  <p className="text-xs text-gray-400">{member.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <Brain className="w-12 h-12 mx-auto mb-6 text-violet-400" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to understand your brain?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Join the pre-alpha. Be among the first to experience neurosupport
            that actually works with your biology.
          </p>
          <Link href="/signup">
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-500 to-pink-500 text-white border-0 hover:opacity-90 transition-opacity text-base px-10"
            >
              Sign up for early access
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
          <p className="text-xs text-gray-500 mt-4">
            Free during pre-alpha · No credit card required
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
