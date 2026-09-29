"use client";

import { use, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, CirclePlay } from "lucide-react";
import { getLessonById } from "@/lib/data";
import { useAuthStore } from "@/lib/store";
import { Button } from "@/components/ui/Button";
import { notFound } from "next/navigation";

export default function LearnPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = use(params);
  const router = useRouter();
  const data = getLessonById(lessonId);
  const completeLesson = useAuthStore((s) => s.completeLesson);
  const submitAssignment = useAuthStore((s) => s.submitAssignment);
  const submissions = useAuthStore((s) => s.submissions);
  const completedLessonIds = useAuthStore((s) => s.completedLessonIds);

  const existing = submissions.find((item) => item.lessonId === lessonId);
  const [assignment, setAssignment] = useState(existing?.text ?? "");
  const [saved, setSaved] = useState(Boolean(existing));

  const nextLesson = useMemo(() => {
    if (!data) return null;
    return data.course.lessons.find((lesson) => lesson.order === data.lesson.order + 1) ?? null;
  }, [data]);

  if (!data) notFound();

  const { course, lesson } = data;
  const isComplete = completedLessonIds.includes(lesson.id);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.06em] text-teal">
          {course.name} · Lesson {lesson.order}
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold text-ink">{lesson.title}</h1>
        <p className="mt-1 text-sm text-muted">{lesson.duration}</p>
      </div>

      <section className="overflow-hidden rounded-xl border border-line bg-paper">
        <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-ink via-ink-soft to-[#134E4A] text-white">
          <div className="text-center">
            <CirclePlay size={56} strokeWidth={1.4} className="mx-auto text-[#5EEAD4]" />
            <p className="mt-4 font-display text-lg font-semibold">▶ Video lesson</p>
            <p className="mt-1 px-4 text-sm text-white/70">{lesson.videoLabel}</p>
          </div>
        </div>
        <div className="p-6">
          <h2 className="font-display text-xl font-bold text-ink">Lesson notes</h2>
          <ul className="mt-4 space-y-3">
            {lesson.notes.map((note) => (
              <li key={note} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-line bg-paper p-6">
        <h2 className="font-display text-xl font-bold text-ink">Practical Task</h2>
        <p className="mt-1 text-sm font-medium text-coral">{lesson.task.title}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">{lesson.task.prompt}</p>
        <textarea
          value={assignment}
          onChange={(e) => {
            setAssignment(e.target.value);
            setSaved(false);
          }}
          rows={6}
          className="mt-4 w-full rounded-lg border border-line px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal"
          placeholder="Write your response here..."
        />
        <div className="mt-4 flex flex-wrap gap-3">
          <Button
            type="button"
            onClick={() => {
              if (!assignment.trim()) return;
              submitAssignment(lesson.id, assignment.trim());
              completeLesson(lesson.id);
              setSaved(true);
            }}
          >
            Submit Assignment
          </Button>
          {saved && <p className="self-center text-sm text-success">Assignment saved. Lesson marked complete.</p>}
          {isComplete && !saved && (
            <p className="self-center text-sm text-muted">This lesson is already marked complete.</p>
          )}
        </div>
      </section>

      <div className="flex flex-wrap justify-between gap-3">
        <Button href="/dashboard" variant="ghost">
          Back to dashboard
        </Button>
        {nextLesson ? (
          <Button
            onClick={() => {
              completeLesson(lesson.id);
              router.push(`/dashboard/learn/${nextLesson.id}`);
            }}
          >
            Next Lesson <ArrowRight size={16} strokeWidth={1.75} />
          </Button>
        ) : (
          <Button href="/dashboard/assessment/va-beginner">
            Take Assessment <ArrowRight size={16} strokeWidth={1.75} />
          </Button>
        )}
      </div>
    </div>
  );
}
