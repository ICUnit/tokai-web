import { redirect } from "next/navigation";
import { Activity, Brain, CheckSquare, Cpu, LogOut, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { logoutAction } from "@/app/actions/auth";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const initials = user.email
    ? user.email.slice(0, 2).toUpperCase()
    : "TK";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Navbar */}
      <nav className="bg-white border-b border-gray-100 px-6 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-900">Tokai</span>
            <span className="text-gray-300 mx-1">/</span>
            <span className="text-sm text-gray-500">Dashboard</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold">
                {initials}
              </div>
              <span className="text-sm text-gray-600 hidden sm:block">
                {user.email}
              </span>
            </div>
            <form action={logoutAction}>
              <Button
                type="submit"
                variant="ghost"
                size="sm"
                className="text-gray-500 hover:text-gray-900 gap-1.5"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Sign out</span>
              </Button>
            </form>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Welcome back 👋
          </h1>
          <p className="text-gray-500 text-sm">
            Your neural dashboard is loading. BCI integration coming in v1.0.
          </p>
        </div>

        {/* Status banner */}
        <div className="bg-gradient-to-r from-violet-500 to-pink-500 rounded-2xl p-6 text-white mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-violet-100 text-sm font-medium mb-1">
                Tokai Pre-Alpha v0.1
              </p>
              <h2 className="text-xl font-bold">
                Your BCI headset is not yet connected
              </h2>
              <p className="text-violet-100 text-sm mt-1">
                Real-time EEG integration arrives in v1.0 Alpha. Simulated data
                is shown below.
              </p>
            </div>
            <div className="shrink-0">
              <div className="bg-white/20 border border-white/30 rounded-xl px-4 py-2 text-sm font-medium text-white text-center">
                v1.0 ETA: June 2026
              </div>
            </div>
          </div>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              icon: Activity,
              label: "Focus Index",
              value: "—",
              sub: "Connect BCI to activate",
              color: "text-violet-500",
            },
            {
              icon: Zap,
              label: "Bio Energy",
              value: "—",
              sub: "Self-report or wearable",
              color: "text-pink-500",
            },
            {
              icon: Cpu,
              label: "Neural Noise",
              value: "—",
              sub: "EEG signal quality",
              color: "text-violet-400",
            },
            {
              icon: Brain,
              label: "α/β Ratio",
              value: "—",
              sub: "Theta/Beta wave ratio",
              color: "text-pink-400",
            },
          ].map((card) => (
            <div
              key={card.label}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <card.icon className={`w-4 h-4 ${card.color}`} />
                <p className="text-xs text-gray-500 font-medium">{card.label}</p>
              </div>
              <p className="text-2xl font-bold text-gray-300 mb-0.5">
                {card.value}
              </p>
              <p className="text-xs text-gray-400">{card.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Task planner stub */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-violet-500" />
                <h3 className="font-semibold text-gray-900">
                  Agentic Task Planner
                </h3>
              </div>
              <span className="text-xs bg-violet-50 text-violet-600 border border-violet-200 rounded-full px-2 py-0.5 font-medium">
                Coming in v1.0
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {[
                "Finish thesis Chapter 6 writeup",
                "Review LUNA fine-tuning results",
                "Update Tokai roadmap",
              ].map((task) => (
                <div
                  key={task}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                >
                  <div className="w-4 h-4 rounded border-2 border-gray-200 shrink-0" />
                  <p className="text-sm text-gray-500">{task}</p>
                </div>
              ))}
              <p className="text-xs text-gray-400 text-center mt-2">
                Task prioritization by Focus Index will be active in v1.0
              </p>
            </div>
          </div>

          {/* LUNA AI stub */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-violet-500" />
                <h3 className="font-semibold text-gray-900">LUNA AI Insights</h3>
              </div>
              <span className="text-xs bg-violet-50 text-violet-600 border border-violet-200 rounded-full px-2 py-0.5 font-medium">
                Simulated
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-violet-50 border border-violet-100 rounded-xl p-4">
                <p className="text-xs font-semibold text-violet-800 mb-1">
                  Neural Insight
                </p>
                <p className="text-sm text-violet-700">
                  No EEG data yet. Connect a supported BCI headset to see
                  real-time cognitive state insights.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs font-semibold text-gray-600 mb-1">
                  Next optimal focus window
                </p>
                <p className="text-sm text-gray-400">
                  Predicted windows will appear here once your headset is paired.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
