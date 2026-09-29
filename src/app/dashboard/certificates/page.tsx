"use client";

import { useAuthStore } from "@/lib/store";
import { Button } from "@/components/ui/Button";

export default function CertificatesPage() {
  const user = useAuthStore((s) => s.user);
  const quiz = useAuthStore((s) =>
    s.quizResults.find((item) => item.courseId === "va-beginner"),
  );
  const passed = quiz && quiz.score >= Math.ceil(quiz.total * 0.7);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold text-ink">Certificates</h1>
        <p className="mt-2 text-muted">
          Full certificate verification arrives in Version 3. Here is a preview of what you will
          earn.
        </p>
      </div>

      <div className="mx-auto max-w-2xl rounded-xl border-2 border-dashed border-line bg-paper p-8 text-center sm:p-12">
        <p className="font-display text-sm font-bold tracking-[0.2em] text-teal">SKILLHUB</p>
        <h2 className="mt-4 font-display text-3xl font-bold text-ink">Certificate of Completion</h2>
        <p className="mt-6 text-muted">This is to certify that</p>
        <p className="mt-2 font-display text-2xl font-bold text-ink">{user?.name ?? "Student Name"}</p>
        <p className="mt-4 text-muted">has successfully completed</p>
        <p className="mt-2 font-semibold text-ink">Virtual Assistance — Beginner Course</p>
        <p className="mt-8 text-sm text-muted">
          {passed
            ? `Quiz score: ${quiz.score}/${quiz.total} · Preview unlock ready`
            : "Complete the assessment with a passing score to unlock this preview."}
        </p>
      </div>

      {!passed && (
        <div className="flex justify-center">
          <Button href="/dashboard/assessment/va-beginner">Take assessment</Button>
        </div>
      )}
    </div>
  );
}
