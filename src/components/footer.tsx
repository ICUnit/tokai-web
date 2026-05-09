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
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Tokai logo" width={32} height={32} className="rounded-lg" />
              <span className="font-bold text-gray-900 text-lg">Tokai</span>
            </Link>
            <p className="text-base text-gray-600 max-w-xs">
              Theory of Knowledge, Augmentable Intelligence. BCI-powered
              neurosupport for ADHD and neurodivergent minds.
            </p>
            <p className="text-sm text-gray-500">
              Research project · National Taiwan University CSIE
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-400 hover:text-violet-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <p className="text-base font-semibold text-gray-900">Product</p>
              <Link href="#features" className="text-base text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-base text-gray-600 hover:text-gray-900 transition-colors">
                How it works
              </Link>
              <Link href="#team" className="text-base text-gray-600 hover:text-gray-900 transition-colors">
                Team
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-base font-semibold text-gray-900">Legal</p>
              <Link href="/privacy" className="text-base text-gray-600 hover:text-gray-900 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-base text-gray-600 hover:text-gray-900 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Tokai. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Pre-Alpha · Not for clinical use
          </p>
        </div>
      </div>
    </footer>
  );
}
