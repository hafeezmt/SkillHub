"use client";

import { use, useState } from "react";
import { courses } from "@/lib/data";
import { useAuthStore } from "@/lib/store";
import { Button } from "@/components/ui/Button";
import { notFound } from "next/navigation";

export default function AssessmentPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = use(params);
  const course = courses.find((item) => item.id === courseId);
  const saveQuizResult = useAuthStore((s) => s.saveQuizResult);
  const existing = useAuthStore((s) =>
    s.quizResults.find((item) => item.courseId === courseId),
  );

  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(Boolean(existing));
  const [score, setScore] = useState(existing?.score ?? 0);

  if (!course || course.quiz.length === 0) notFound();

  const total = course.quiz.length;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.06em] text-teal">Assessment</p>
        <h1 className="mt-2 font-display text-3xl font-bold text-ink">
          {course.name} Quiz
        </h1>
        <p className="mt-2 text-muted">
          Answer each question. SkillHub calculates your score when you submit.
        </p>
      </div>

      {submitted ? (
        <section className="rounded-xl border border-line bg-paper p-8 text-center">
          <p className="text-sm uppercase tracking-[0.08em] text-muted">Your score</p>
          <p className="mt-3 font-display text-5xl font-bold text-teal">
            {score}/{total}
          </p>
          <p className="mt-3 text-muted">
            {score >= Math.ceil(total * 0.7)
              ? "Strong work — you are ready to keep building your VA skills."
              : "Review the lessons and try again when you are ready."}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/dashboard">Back to dashboard</Button>
            <Button
              variant="secondary"
              onClick={() => {
                setSubmitted(false);
                setAnswers({});
              }}
            >
              Retake quiz
            </Button>
          </div>
        </section>
      ) : (
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            let nextScore = 0;
            course.quiz.forEach((question) => {
              if (answers[question.id] === question.correctIndex) nextScore += 1;
            });
            setScore(nextScore);
            saveQuizResult(course.id, nextScore, total);
            setSubmitted(true);
          }}
        >
          {course.quiz.map((question, index) => (
            <fieldset key={question.id} className="rounded-xl border border-line bg-paper p-5">
              <legend className="font-semibold text-ink">
                Question {index + 1}: {question.question}
              </legend>
              <div className="mt-4 space-y-2">
                {question.options.map((option, optionIndex) => (
                  <label
                    key={option}
                    className="flex cursor-pointer items-center gap-3 rounded-lg border border-line px-3 py-3 text-sm hover:bg-mist"
                  >
                    <input
                      type="radio"
                      name={question.id}
                      required
                      checked={answers[question.id] === optionIndex}
                      onChange={() =>
                        setAnswers((prev) => ({ ...prev, [question.id]: optionIndex }))
                      }
                      className="accent-teal"
                    />
                    <span>
                      {String.fromCharCode(65 + optionIndex)}. {option}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
          <Button type="submit">Submit quiz</Button>
        </form>
      )}
    </div>
  );
}
