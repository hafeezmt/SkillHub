"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { useAuthStore } from "@/lib/store";

const schema = z
  .object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Enter a valid email address"),
    password: z.string().min(6, "Minimum 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof schema>;

export default function SignupPage() {
  const router = useRouter();
  const signup = useAuthStore((s) => s.signup);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-6xl items-center px-4 py-12 sm:px-6">
      <div className="grid w-full overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_8px_40px_rgba(7,38,31,0.08)] lg:grid-cols-2">
        <div className="relative hidden bg-ink p-10 text-white lg:block">
          <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_30%_20%,#0F766E_0,transparent_45%),radial-gradient(circle_at_80%_80%,#E85D04_0,transparent_40%)]" />
          <div className="relative">
            <p className="font-display text-2xl font-bold">
              Skill<span className="text-[#5EEAD4]">Hub</span>
            </p>
            <h1 className="mt-16 font-display text-3xl font-bold leading-snug">
              Your next skill is one step away.
            </h1>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li>✓ Practical digital skills</li>
              <li>✓ Learn at your own time</li>
              <li>✓ Practise with real tasks</li>
              <li>✓ Track progress toward assessments</li>
            </ul>
          </div>
        </div>

        <form
          className="p-6 sm:p-10"
          onSubmit={handleSubmit((values) => {
            signup(values);
            router.push("/dashboard");
          })}
        >
          <h2 className="font-display text-2xl font-bold text-ink">Create your account</h2>
          <p className="mt-2 text-sm text-muted">Start with Virtual Assistance — Beginner Course</p>

          <label className="mt-8 block">
            <span className="mb-1.5 block text-[13px] font-medium text-ink">Full name</span>
            <input
              {...register("name")}
              className="w-full rounded-lg border border-line px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal"
              placeholder="Ada Okafor"
            />
            {errors.name && <p className="mt-1 text-xs text-danger">{errors.name.message}</p>}
          </label>

          <label className="mt-4 block">
            <span className="mb-1.5 block text-[13px] font-medium text-ink">Email</span>
            <input
              {...register("email")}
              type="email"
              className="w-full rounded-lg border border-line px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal"
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-xs text-danger">{errors.email.message}</p>}
          </label>

          <label className="mt-4 block">
            <span className="mb-1.5 block text-[13px] font-medium text-ink">Password</span>
            <input
              {...register("password")}
              type="password"
              className="w-full rounded-lg border border-line px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="mt-1 text-xs text-danger">{errors.password.message}</p>
            )}
          </label>

          <label className="mt-4 block">
            <span className="mb-1.5 block text-[13px] font-medium text-ink">Confirm password</span>
            <input
              {...register("confirmPassword")}
              type="password"
              className="w-full rounded-lg border border-line px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal"
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-danger">{errors.confirmPassword.message}</p>
            )}
          </label>

          <Button type="submit" className="mt-6 w-full" disabled={isSubmitting}>
            Create account
          </Button>

          <p className="mt-6 text-center text-sm text-muted">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-teal hover:underline">
              Sign in →
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
