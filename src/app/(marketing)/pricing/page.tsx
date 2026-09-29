import { pricingPlans } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-4xl font-bold text-ink">Pricing</h1>
        <p className="mt-3 text-muted">
          Start free, then unlock the full Virtual Assistance course. Final pricing can adjust after
          customer research.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
        {pricingPlans.map((plan) => (
          <article
            key={plan.name}
            className={cn(
              "rounded-xl border bg-paper p-6 shadow-[0_4px_24px_rgba(7,38,31,0.06)]",
              plan.highlighted ? "border-teal ring-2 ring-teal/20" : "border-line",
            )}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.06em] text-teal">
              {plan.name}
            </p>
            <p className="mt-3 font-display text-4xl font-bold text-ink">{plan.price}</p>
            <p className="mt-2 text-sm text-muted">{plan.description}</p>
            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-ink/85">
                  <Check className="mt-0.5 shrink-0 text-teal" size={16} strokeWidth={1.75} />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              href={plan.href}
              variant={plan.highlighted ? "primary" : "secondary"}
              className="mt-8 w-full"
            >
              {plan.cta}
            </Button>
          </article>
        ))}
      </div>
    </div>
  );
}
