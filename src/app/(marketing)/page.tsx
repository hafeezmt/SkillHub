import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CourseIconRow } from "@/components/course/CourseCard";
import { courses, getFeaturedCourse, howItWorksSteps } from "@/lib/data";

export default function HomePage() {
  const featured = getFeaturedCourse();

  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden">
        <Image
          src="/images/hero-learners.png"
          alt="Young learners practising digital skills together on laptops"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/88 via-ink/72 to-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/20" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
          <p className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Skill<span className="text-[#5EEAD4]">Hub</span>
          </p>
          <p className="mt-3 text-lg font-semibold text-[#FDBA74] sm:text-xl">
            Learn a Skill. Build Your Future.
          </p>
          <h1 className="mt-8 max-w-3xl font-display text-3xl font-bold text-white sm:text-5xl">
            Learn practical digital skills from anywhere, at your own time.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Build real skills, practise what you learn, and create a portfolio for future
            opportunities.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/courses" size="lg">
              Explore Courses <ArrowRight size={18} strokeWidth={1.75} />
            </Button>
            <Button
              href="/signup"
              size="lg"
              className="border-white/40 bg-white/10 text-white hover:bg-white hover:text-ink"
              variant="secondary"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-ink">Four skills. One clear path.</h2>
          <p className="mt-3 text-muted">
            Real people, real practice. Start with Virtual Assistance in Version 1 — more courses
            unlock as SkillHub grows.
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
        <div className="overflow-hidden rounded-2xl bg-ink text-white">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[280px]">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-ink/35" />
            </div>
            <div className="px-6 py-10 sm:px-10">
              <p className="text-sm uppercase tracking-[0.08em] text-white/50">Featured course</p>
              <h2 className="mt-3 font-display text-3xl font-bold">
                Ready to start with Virtual Assistance?
              </h2>
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
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-[#5EEAD4]"
                      size={18}
                      strokeWidth={1.75}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-white/70">Beginner · 6 weeks · ₦25,000</p>
              <Link
                href="/courses/virtual-assistance"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-coral px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#cf5203]"
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
