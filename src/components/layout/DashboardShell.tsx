"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Award,
  BookOpen,
  ClipboardCheck,
  FolderKanban,
  LayoutDashboard,
  LogOut,
  UserRound,
} from "lucide-react";
import { useAuthStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

const nav = [
  { href: "/dashboard", label: "My Courses", icon: LayoutDashboard },
  { href: "/dashboard/progress", label: "Progress", icon: BookOpen },
  { href: "/dashboard/assessment/va-beginner", label: "Assessments", icon: ClipboardCheck },
  { href: "/dashboard/certificates", label: "Certificates", icon: Award },
  { href: "/dashboard/portfolio", label: "My Portfolio", icon: FolderKanban },
  { href: "/dashboard/profile", label: "Profile", icon: UserRound },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  useEffect(() => {
    if (!user) router.replace("/login");
  }, [user, router]);

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-mist text-muted">
        Loading your dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mist">
      <div className="mx-auto flex max-w-6xl gap-6 px-4 py-6 sm:px-6 lg:py-8">
        <aside className="hidden w-60 shrink-0 rounded-xl border border-line bg-paper p-4 lg:block">
          <Link href="/" className="font-display text-lg font-bold text-ink">
            Skill<span className="text-teal">Hub</span>
          </Link>
          <nav className="mt-8 space-y-1">
            {nav.map((item) => {
              const Icon = item.icon;
              const active =
                pathname === item.href ||
                (item.href !== "/dashboard" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition",
                    active
                      ? "border-l-[3px] border-teal bg-mist text-teal"
                      : "hover:bg-mist hover:text-ink",
                  )}
                >
                  <Icon size={18} strokeWidth={1.75} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <button
            type="button"
            onClick={() => {
              logout();
              router.push("/");
            }}
            className="mt-8 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted hover:bg-mist hover:text-danger"
          >
            <LogOut size={18} strokeWidth={1.75} />
            Sign out
          </button>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="mb-4 flex gap-2 overflow-x-auto lg:hidden">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold",
                  pathname === item.href
                    ? "border-teal bg-teal text-white"
                    : "border-line bg-paper text-muted",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
