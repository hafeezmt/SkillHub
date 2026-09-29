"use client";

import { useAuthStore } from "@/lib/store";
import { Button } from "@/components/ui/Button";

export default function ProfilePage() {
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold text-ink">Profile</h1>
        <p className="mt-2 text-muted">Manage your SkillHub learner profile.</p>
      </div>

      <section className="rounded-xl border border-line bg-paper p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink font-display text-xl font-bold text-white">
            {user?.name?.charAt(0)?.toUpperCase() ?? "S"}
          </div>
          <div>
            <p className="font-display text-xl font-semibold text-ink">{user?.name}</p>
            <p className="text-sm text-muted">{user?.email}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-[13px] font-medium text-ink">Full name</span>
            <input
              defaultValue={user?.name}
              readOnly
              className="w-full rounded-lg border border-line bg-mist px-4 py-3 text-sm"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-[13px] font-medium text-ink">Email</span>
            <input
              defaultValue={user?.email}
              readOnly
              className="w-full rounded-lg border border-line bg-mist px-4 py-3 text-sm"
            />
          </label>
        </div>

        <p className="mt-4 text-sm text-muted">
          Profile editing and password changes will connect to real auth in a later version.
        </p>

        <Button
          variant="ghost"
          className="mt-6"
          onClick={() => {
            logout();
            window.location.href = "/";
          }}
        >
          Sign out
        </Button>
      </section>
    </div>
  );
}
