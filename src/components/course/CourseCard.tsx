import Link from "next/link";
import {
  BriefcaseBusiness,
  Clapperboard,
  Megaphone,
  Palette,
  ArrowRight,
} from "lucide-react";
import type { Course } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const icons = {
  va: BriefcaseBusiness,
  design: Palette,
  marketing: Megaphone,
  content: Clapperboard,
};

export function CourseCard({
  course,
  compact = false,
}: {
  course: Course;
  compact?: boolean;
}) {
  const Icon = icons[course.icon];
  const available = course.status === "available";

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-paper shadow-[0_4px_24px_rgba(7,38,31,0.06)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(7,38,31,0.1)]",
        course.featured && "ring-2 ring-teal/30",
      )}
    >
      <div className="relative bg-gradient-to-br from-ink via-ink-soft to-[#134E4A] px-5 py-8 text-white">
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,#5EEAD4_0,transparent_40%),radial-gradient(circle_at_80%_70%,#E85D04_0,transparent_35%)]" />
        <div className="relative flex items-start justify-between gap-3">
          <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
            <Icon size={26} strokeWidth={1.6} />
          </div>
          {course.featured && (
            <span className="rounded-full bg-coral px-3 py-1 text-[11px] font-semibold uppercase tracking-wide">
              Featured
            </span>
          )}
        </div>
        <h3 className="relative mt-5 font-display text-xl font-bold">{course.name}</h3>
        <p className="relative mt-1 text-sm text-white/70">
          {course.level} · {course.duration}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[15px] leading-relaxed text-muted">{course.shortDescription}</p>

        {!compact && (
          <ul className="mt-4 space-y-1.5">
            {course.skills.slice(0, 4).map((skill) => (
              <li key={skill} className="text-sm text-ink/80">
                <span className="mr-2 text-teal">✓</span>
                {skill}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex items-end justify-between gap-3 pt-6">
          <div>
            <p className="font-display text-lg font-bold text-ink">{course.price}</p>
            <p className="text-xs text-muted">{course.priceNote}</p>
          </div>
          {available ? (
            <Button href={`/courses/${course.slug}`} size="sm">
              Enroll Now <ArrowRight size={16} strokeWidth={1.75} />
            </Button>
          ) : (
            <span className="rounded-lg bg-mist px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted">
              Version 2
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export function CourseIconRow({ courses }: { courses: Course[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {courses.map((course) => {
        const Icon = icons[course.icon];
        return (
          <Link
            key={course.id}
            href={course.status === "available" ? `/courses/${course.slug}` : "/courses"}
            className="rounded-xl border border-line bg-paper p-5 transition hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-[0_8px_24px_rgba(7,38,31,0.08)]"
          >
            <Icon className="text-teal" size={28} strokeWidth={1.6} />
            <p className="mt-4 font-display text-lg font-semibold text-ink">{course.name}</p>
            <p className="mt-1 text-sm text-muted">
              {course.status === "available" ? "Open for enrollment" : "Coming in Version 2"}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
