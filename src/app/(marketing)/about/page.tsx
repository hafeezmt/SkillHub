import { Button } from "@/components/ui/Button";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl font-bold text-ink">About SkillHub</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        SkillHub exists to help young people learn practical digital skills without needing a
        campus classroom or a complicated process.
      </p>

      <section className="mt-10 rounded-xl border border-line bg-paper p-6 sm:p-8">
        <h2 className="font-display text-2xl font-bold text-ink">Our Mission</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          To make practical digital skills accessible, flexible and affordable for young people.
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-line bg-paper p-6 sm:p-8">
        <h2 className="font-display text-2xl font-bold text-ink">Why we exist</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          Too many learning platforms stop at watching videos. SkillHub is built around a full
          journey: learn, practise through tasks, complete assessments, and eventually build a
          portfolio that can open doors to clients and employers.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-muted">
          We start focused — Virtual Assistance first — then grow into more skills and opportunity
          connections as the platform proves itself with real learners.
        </p>
      </section>

      <div className="mt-10">
        <Button href="/signup">Join SkillHub</Button>
      </div>
    </div>
  );
}
