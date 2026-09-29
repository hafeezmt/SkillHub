import { notFound } from "next/navigation";
import { ArrowRight, Clock3, Signal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getCourseBySlug } from "@/lib/data";

export async function generateStaticParams() {
  return [
    { slug: "virtual-assistance" },
    { slug: "graphic-design" },
    { slug: "digital-marketing" },
    { slug: "content-creation" },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  return {
    title: course?.name ?? "Course",
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const available = course.status === "available";

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="overflow-hidden rounded-2xl bg-ink px-6 py-10 text-white sm:px-10">
        <p className="text-sm uppercase tracking-[0.08em] text-white/50">
          {course.featured ? "Featured course" : "Course"}
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
          {course.name}
          {available ? " — Beginner Course" : ""}
        </h1>
        <p className="mt-4 max-w-2xl text-white/70">{course.description}</p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/80">
          <span className="inline-flex items-center gap-2">
            <Clock3 size={16} strokeWidth={1.75} /> {course.duration}
          </span>
          <span className="inline-flex items-center gap-2">
            <Signal size={16} strokeWidth={1.75} /> {course.level}
          </span>
          <span className="font-semibold text-[#5EEAD4]">{course.price}</span>
        </div>
        <div className="mt-8">
          {available ? (
            <Button href="/signup" variant="coral" size="lg">
              Enroll in Course <ArrowRight size={18} strokeWidth={1.75} />
            </Button>
          ) : (
            <p className="rounded-lg bg-white/10 px-4 py-3 text-sm text-white/80">
              This course opens in Version 2. Start with Virtual Assistance today.
            </p>
          )}
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <section className="rounded-xl border border-line bg-paper p-6">
          <h2 className="font-display text-2xl font-bold text-ink">What you will learn</h2>
          <ul className="mt-5 space-y-3">
            {course.skills.map((skill) => (
              <li key={skill} className="flex items-start gap-3 text-[15px] text-ink/85">
                <span className="mt-1 text-teal">✓</span>
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-line bg-paper p-6">
          <h2 className="font-display text-2xl font-bold text-ink">Course structure</h2>
          <ol className="mt-5 space-y-3">
            {course.modules.map((module, index) => (
              <li
                key={module}
                className="flex items-center gap-3 border-b border-mist pb-3 last:border-0"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-mist text-sm font-bold text-teal">
                  {index + 1}
                </span>
                <span className="font-medium text-ink">{module}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>

      {available && (
        <div className="mt-10 flex justify-center">
          <Button href="/signup" size="lg">
            Enroll in Course <ArrowRight size={18} strokeWidth={1.75} />
          </Button>
        </div>
      )}
    </div>
  );
}
