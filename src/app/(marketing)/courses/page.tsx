import { CourseCard } from "@/components/course/CourseCard";
import { courses } from "@/lib/data";

export const metadata = {
  title: "Courses",
};

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-bold text-ink">Courses</h1>
        <p className="mt-3 text-muted">
          Browse available skills. Virtual Assistance is the featured course in Version 1 — more
          open in Version 2.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
