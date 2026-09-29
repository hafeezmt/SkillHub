"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useAuthStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const user = useAuthStore((s) => s.user);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-display text-xl font-extrabold tracking-tight text-ink">
          Skill<span className="text-teal">Hub</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[13px] font-medium uppercase tracking-[0.06em] text-ink/80 transition hover:text-teal",
                pathname === link.href && "text-teal",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <Button href="/dashboard" size="sm">
              Dashboard
            </Button>
          ) : (
            <>
              <Link
                href="/login"
                className="text-[13px] font-semibold uppercase tracking-[0.06em] text-ink hover:text-teal"
              >
                Login
              </Link>
              <Button href="/signup" size="sm">
                Get Started
              </Button>
            </>
          )}
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-mist"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              {user ? (
                <Button href="/dashboard" className="w-full" onClick={() => setOpen(false)}>
                  Dashboard
                </Button>
              ) : (
                <>
                  <Button href="/login" variant="secondary" className="w-full">
                    Login
                  </Button>
                  <Button href="/signup" className="w-full">
                    Get Started
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
