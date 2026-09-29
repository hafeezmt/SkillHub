import { howItWorksSteps } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { ArrowDown, ArrowRight } from "lucide-react";

export const metadata = { title: "How It Works" };

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl font-bold text-ink">How It Works</h1>
      <p className="mt-3 text-muted">
        Keep it simple. SkillHub takes you from account creation to opportunity readiness.
      </p>

      <div className="mt-12 space-y-2">
        {howItWorksSteps.map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div className="w-full rounded-xl border border-line bg-paper px-5 py-4 text-center shadow-[0_4px_20px_rgba(7,38,31,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-teal">
                Step {index + 1}
              </p>
              <p className="mt-1 font-display text-xl font-semibold text-ink">{step}</p>
            </div>
            {index < howItWorksSteps.length - 1 && (
              <ArrowDown className="my-2 text-muted" size={20} strokeWidth={1.75} />
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button href="/signup" size="lg">
          Create an account <ArrowRight size={18} strokeWidth={1.75} />
        </Button>
      </div>
    </div>
  );
}
