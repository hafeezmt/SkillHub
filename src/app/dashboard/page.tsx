"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedCourse } from "@/lib/data";
import { useAuthStore } from "@/lib/store";
import { Button } from "@/components/ui/Button";

export default function DashboardPage() {
  const user = useAuthStore((s) => s.user);
  const completedLessonIds = useAuthStore((s) => s.completedLessonIds);
  const course = getFeaturedCourse();
  const progress = Math.min(
    100,
    Math.round((completedLessonIds.length / Math.max(course.lessons.length, 1)) * 100),
  );
  const nextLesson =
    course.lessons.find((lesson) => !completedLessonIds.includes(lesson.id)) ??
    course.lessons[0];

  const firstName = user?.name?.split(" ")[0] ?? "Learner";

  return (
    <div className="space-y-6">
      <section className="rounded-xl bg-ink px-6 py-8 text-white sm:px-8">
        <h1 className="font-display text-3xl font-bold">Welcome, {firstName}</h1>
        <p className="mt-2 text-white/70">
          You have {course.lessons.length - completedLessonIds.length} lessons left in Virtual
          Assistance. Keep going — practise turns learning into skill.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-ink">My Courses</h2>
        <div className="mt-4 rounded-xl border border-line bg-paper p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="font-display text-xl font-semibold text-ink">{course.name}</p>
              <p className="mt-1 text-sm text-muted">
                {course.level} · {course.duration}
              </p>
              <p className="mt-4 text-sm font-medium text-ink">Progress: {progress}%</p>
              <div className="mt-2 h-2 w-56 max-w-full overflow-hidden rounded-full bg-mist">
                <div className="h-full rounded-full bg-teal" style={{ width: `${progress}%` }} />
              </div>
            </div>
            <Button href={`/dashboard/learn/${nextLesson.id}`}>
              Continue Course <ArrowRight size={16} strokeWidth={1.75} />
            </Button>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Continue Learning",
            body: nextLesson ? `Next: ${nextLesson.title}` : "All lessons complete",
            href: `/dashboard/learn/${nextLesson.id}`,
          },
          {
            title: "Assignments",
            body: "Submit practical tasks after each lesson",
            href: `/dashboard/learn/${nextLesson.id}`,
          },
          {
            title: "Assessments",
            body: "Take the Virtual Assistance quiz",
            href: "/dashboard/assessment/va-beginner",
          },
        ].map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="rounded-xl border border-line bg-paper p-5 transition hover:-translate-y-0.5 hover:border-teal/40"
          >
            <p className="font-semibold text-ink">{card.title}</p>
            <p className="mt-2 text-sm text-muted">{card.body}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
