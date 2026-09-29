import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CourseIconRow } from "@/components/course/CourseCard";
import { courses, howItWorksSteps } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#99F6E4_0%,transparent_45%),radial-gradient(ellipse_at_bottom_left,#FED7AA_0%,transparent_40%),linear-gradient(180deg,#F3F7F5_0%,#E7F0EC_100%)]" />
        <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(7,38,31,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(7,38,31,0.04)_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
          <p className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-6xl">
            Skill<span className="text-teal">Hub</span>
          </p>
          <p className="mt-3 text-lg font-semibold text-coral sm:text-xl">
            Learn a Skill. Build Your Future.
          </p>
          <h1 className="mt-8 max-w-3xl font-display text-3xl font-bold text-ink sm:text-5xl">
            Learn practical digital skills from anywhere, at your own time.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Build real skills, practise what you learn, and create a portfolio for future
            opportunities.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/courses" size="lg">
              Explore Courses <ArrowRight size={18} strokeWidth={1.75} />
            </Button>
            <Button href="/signup" variant="secondary" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-ink">Four skills. One clear path.</h2>
          <p className="mt-3 text-muted">
            Start with Virtual Assistance in Version 1. More courses unlock as SkillHub grows.
          </p>
        </div>
        <CourseIconRow courses={courses} />
      </section>

      <section className="border-y border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink">How SkillHub works</h2>
            <p className="mt-3 text-muted">
              A simple journey from first lesson to real-world readiness.
            </p>
            <Button href="/how-it-works" variant="ghost" className="mt-6">
              See full path <ArrowRight size={16} strokeWidth={1.75} />
            </Button>
          </div>
          <ol className="space-y-3">
            {howItWorksSteps.map((step, index) => (
              <li
                key={step}
                className="flex items-center gap-3 rounded-xl border border-line bg-mist/60 px-4 py-3"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-sm font-bold text-white">
                  {index + 1}
                </span>
                <span className="font-medium text-ink">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="overflow-hidden rounded-2xl bg-ink px-6 py-10 text-white sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold">Ready to start with Virtual Assistance?</h2>
              <p className="mt-3 max-w-xl text-white/70">
                Version 1 focuses on one strong course so you can learn, practise, and test with real
                young people — before SkillHub expands.
              </p>
              <ul className="mt-6 space-y-2">
                {[
                  "Email, scheduling, research, and support skills",
                  "Lesson videos, notes, and practical tasks",
                  "Quiz assessment and progress tracking",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/85">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#5EEAD4]" size={18} strokeWidth={1.75} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.08em] text-white/50">Featured course</p>
              <p className="mt-2 font-display text-2xl font-bold">Virtual Assistance</p>
              <p className="mt-1 text-white/70">Beginner · 6 weeks · ₦25,000</p>
              <Link
                href="/courses/virtual-assistance"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-coral px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#cf5203]"
              >
                View course <ArrowRight size={16} strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
