import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Course } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function CourseCard({
  course,
  compact = false,
}: {
  course: Course;
  compact?: boolean;
}) {
  const available = course.status === "available";

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-paper shadow-[0_4px_24px_rgba(7,38,31,0.06)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(7,38,31,0.1)]",
        course.featured && "ring-2 ring-teal/30",
      )}
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={course.image}
          alt={course.imageAlt}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent" />
        {course.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-coral px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
            Featured
          </span>
        )}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h3 className="font-display text-xl font-bold">{course.name}</h3>
          <p className="mt-0.5 text-sm text-white/80">
            {course.level} · {course.duration}
          </p>
        </div>
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
      {courses.map((course) => (
        <Link
          key={course.id}
          href={course.status === "available" ? `/courses/${course.slug}` : "/courses"}
          className="group overflow-hidden rounded-xl border border-line bg-paper transition hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-[0_8px_24px_rgba(7,38,31,0.08)]"
        >
          <div className="relative h-40 overflow-hidden">
            <Image
              src={course.image}
              alt={course.imageAlt}
              fill
              className="object-cover transition duration-300 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
          </div>
          <div className="p-4">
            <p className="font-display text-lg font-semibold text-ink">{course.name}</p>
            <p className="mt-1 text-sm text-muted">
              {course.status === "available" ? "Open for enrollment" : "Coming in Version 2"}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
