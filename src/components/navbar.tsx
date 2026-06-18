import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/language-toggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0c0818]/90 backdrop-blur-md border-b border-purple-400/10">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Tokai logo"
            width={40}
            height={40}
            className="rounded-xl"
          />
          <span className="font-bold text-2xl tracking-tight text-[#e8f4ff]">
            Tokai
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <Link href="/login">
            <Button variant="ghost" size="lg" className="text-[#c8d8e8] hover:text-[#e8f4ff] hover:bg-purple-400/10 text-base">
              Sign in
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-400 to-violet-600 text-white border-0 hover:opacity-90 transition-opacity shadow-sm text-base px-6"
            >
              Get started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
