import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaFacebook, FaInstagram, FaDiscord } from "react-icons/fa";

const socials = [
  { icon: FaGithub,    href: "https://github.com/TokaiApp",              label: "GitHub"    },
  { icon: FaDiscord,   href: "https://discord.gg/kyNgMNHfYX",            label: "Discord"   },
  { icon: FaInstagram, href: "https://instagram.com/tokai.app",           label: "Instagram" },
  { icon: FaFacebook,  href: "https://facebook.com/tokaiapp",             label: "Facebook"  },
];

export function Footer() {
  return (
    <footer className="border-t border-purple-400/10 bg-[#080614]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Tokai logo" width={32} height={32} className="rounded-lg" />
              <span className="font-bold text-[#e8f4ff] text-lg">Tokai</span>
            </Link>
            <p className="text-base text-[#c8d8e8] max-w-xs">
              Theory of Knowledge, Augmentable Intelligence. BCI-powered
              neurosupport for ADHD and neurodivergent minds.
            </p>
            <p className="text-sm text-[#5a8fa8]">
              Research project · National Taiwan University CSIE
            </p>
            <a
              href="mailto:austin@tokai.app"
              className="text-sm text-[#5a8fa8] hover:text-purple-400 transition-colors"
            >
              austin@tokai.app
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-[#5a8fa8] hover:text-purple-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <p className="text-base font-semibold text-[#e8f4ff]">Product</p>
              <Link href="#features" className="text-base text-[#c8d8e8] hover:text-[#e8f4ff] transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-base text-[#c8d8e8] hover:text-[#e8f4ff] transition-colors">
                How it works
              </Link>
              <Link href="#app" className="text-base text-[#c8d8e8] hover:text-[#e8f4ff] transition-colors">
                App Preview
              </Link>
              <Link href="#team" className="text-base text-[#c8d8e8] hover:text-[#e8f4ff] transition-colors">
                Team
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-base font-semibold text-[#e8f4ff]">Legal</p>
              <Link href="/privacy" className="text-base text-[#c8d8e8] hover:text-[#e8f4ff] transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-base text-[#c8d8e8] hover:text-[#e8f4ff] transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-purple-400/10 flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-sm text-[#5a8fa8]">
            © {new Date().getFullYear()} Tokai. All rights reserved.
          </p>
          <p className="text-sm text-[#5a8fa8]">
            Alpha · Not for clinical use
          </p>
        </div>
      </div>
    </footer>
  );
}
