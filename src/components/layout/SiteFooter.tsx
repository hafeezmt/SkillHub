import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-bold">
            Skill<span className="text-[#5EEAD4]">Hub</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
            Learn a Skill. Build Your Future. Practical digital skills for young people —
            flexible, affordable, and built around real practice.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/50">Explore</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-white/80">
            <Link href="/courses" className="hover:text-white">
              Courses
            </Link>
            <Link href="/how-it-works" className="hover:text-white">
              How It Works
            </Link>
            <Link href="/pricing" className="hover:text-white">
              Pricing
            </Link>
            <Link href="/about" className="hover:text-white">
              About Us
            </Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/50">Contact</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-white/80">
            <a href="mailto:hello@skillhub.ng" className="hover:text-white">
              hello@skillhub.ng
            </a>
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              WhatsApp
            </a>
            <Link href="/contact" className="hover:text-white">
              Contact form
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/45">
        © {new Date().getFullYear()} SkillHub. Learn → Practise → Assessment → Portfolio.
      </div>
    </footer>
  );
}
