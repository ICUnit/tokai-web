import Link from "next/link";
import { Brain } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-gray-900">Tokai</span>
            </Link>
            <p className="text-sm text-gray-500 max-w-xs">
              Theory of Knowledge, Augmentable Intelligence. BCI-powered
              neurosupport for ADHD and neurodivergent minds.
            </p>
            <p className="text-xs text-gray-400">
              Research project · National Taiwan University CSIE
            </p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-gray-900">Product</p>
              <Link href="#features" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                How it works
              </Link>
              <Link href="#team" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Team
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-gray-900">Legal</p>
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Tokai. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            Pre-Alpha · Not for clinical use
          </p>
        </div>
      </div>
    </footer>
  );
}
