import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Tokai logo"
            width={40}
            height={40}
            className="rounded-xl"
          />
          <span className="font-bold text-2xl tracking-tight text-gray-900">
            Tokai
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" size="lg" className="text-gray-600 hover:text-gray-900 text-base">
              Sign in
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              size="lg"
              className="bg-gradient-to-r from-violet-500 to-pink-500 text-white border-0 hover:opacity-90 transition-opacity shadow-sm text-base px-6"
            >
              Get started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
