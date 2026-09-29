"use client";

import { useAuthStore } from "@/lib/store";
import { getFeaturedCourse } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export default function PortfolioPage() {
  const submissions = useAuthStore((s) => s.submissions);
  const course = getFeaturedCourse();

  const items = submissions.map((submission) => {
    const lesson = course.lessons.find((item) => item.id === submission.lessonId);
    return {
      title: lesson?.task.title ?? "Assignment",
      lessonTitle: lesson?.title ?? "Lesson",
      text: submission.text,
    };
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold text-ink">My Portfolio</h1>
        <p className="mt-2 text-muted">
          Work you create during training appears here. Shareable portfolio links and client
          connections arrive in Version 3.
        </p>
      </div>

      {items.length === 0 ? (
        <div className="rounded-xl border border-line bg-paper p-8 text-center">
          <p className="font-display text-xl font-semibold text-ink">No portfolio pieces yet</p>
          <p className="mt-2 text-sm text-muted">
            Complete practical tasks in your lessons — email samples, research briefs, and projects
            will show up here.
          </p>
          <Button href="/dashboard/learn/va-1" className="mt-6">
            Start learning
          </Button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.title + item.lessonTitle} className="rounded-xl border border-line bg-paper p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.06em] text-teal">
                {item.lessonTitle}
              </p>
              <h2 className="mt-2 font-display text-lg font-semibold text-ink">{item.title}</h2>
              <p className="mt-3 line-clamp-5 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      )}

      <div className="rounded-xl border border-dashed border-line bg-mist/80 p-5 text-sm text-muted">
        Coming in Version 3: share your portfolio with potential clients and employers — email
        management samples, design flyers, social campaigns, content calendars, and marketing
        projects.
      </div>
    </div>
  );
}
