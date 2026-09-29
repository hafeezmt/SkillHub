"use client";

import Link from "next/link";
import { getFeaturedCourse } from "@/lib/data";
import { useAuthStore } from "@/lib/store";
import { CheckCircle2, Circle } from "lucide-react";

export default function ProgressPage() {
  const course = getFeaturedCourse();
  const completedLessonIds = useAuthStore((s) => s.completedLessonIds);
  const submissions = useAuthStore((s) => s.submissions);
  const quizResults = useAuthStore((s) => s.quizResults);
  const quiz = quizResults.find((item) => item.courseId === course.id);
  const progress = Math.min(
    100,
    Math.round((completedLessonIds.length / Math.max(course.lessons.length, 1)) * 100),
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold text-ink">Progress</h1>
        <p className="mt-2 text-muted">Track lessons, assignments, and assessments in one place.</p>
      </div>

      <section className="rounded-xl border border-line bg-paper p-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-display text-xl font-semibold text-ink">{course.name}</p>
            <p className="mt-1 text-sm text-muted">Overall progress</p>
          </div>
          <p className="font-display text-4xl font-bold text-teal">{progress}%</p>
        </div>
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-mist">
          <div className="h-full rounded-full bg-teal" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-4 grid gap-3 text-sm text-muted sm:grid-cols-3">
          <p>
            Lessons complete: {completedLessonIds.length}/{course.lessons.length}
          </p>
          <p>Assignments submitted: {submissions.length}</p>
          <p>
            Quiz:{" "}
            {quiz ? `${quiz.score}/${quiz.total}` : "Not taken yet"}
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-line bg-paper p-6">
        <h2 className="font-display text-xl font-bold text-ink">Lesson checklist</h2>
        <ul className="mt-4 space-y-3">
          {course.lessons.map((lesson) => {
            const done = completedLessonIds.includes(lesson.id);
            return (
              <li key={lesson.id}>
                <Link
                  href={`/dashboard/learn/${lesson.id}`}
                  className="flex items-center gap-3 rounded-lg border border-line px-4 py-3 hover:bg-mist"
                >
                  {done ? (
                    <CheckCircle2 className="text-success" size={18} strokeWidth={1.75} />
                  ) : (
                    <Circle className="text-muted" size={18} strokeWidth={1.75} />
                  )}
                  <span className="font-medium text-ink">
                    Lesson {lesson.order}: {lesson.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
