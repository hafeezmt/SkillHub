"use client";

import { faqItems } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Mail, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-bold text-ink">Contact</h1>
        <p className="mt-3 text-muted">
          Questions about SkillHub, enrollment, or partnerships? Reach out — we respond as quickly
          as we can.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <a
            href="https://wa.me/2348000000000"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-line bg-paper p-4 hover:border-teal/40"
          >
            <MessageCircle className="text-teal" size={22} strokeWidth={1.75} />
            <div>
              <p className="font-semibold text-ink">WhatsApp</p>
              <p className="text-sm text-muted">Chat with the SkillHub team</p>
            </div>
          </a>
          <a
            href="mailto:hello@skillhub.ng"
            className="flex items-center gap-3 rounded-xl border border-line bg-paper p-4 hover:border-teal/40"
          >
            <Mail className="text-teal" size={22} strokeWidth={1.75} />
            <div>
              <p className="font-semibold text-ink">Email</p>
              <p className="text-sm text-muted">hello@skillhub.ng</p>
            </div>
          </a>
          <div className="flex items-center gap-3 rounded-xl border border-line bg-paper p-4">
            <Share2 className="text-teal" size={22} strokeWidth={1.75} />
            <div>
              <p className="font-semibold text-ink">Social media</p>
              <p className="text-sm text-muted">@skillhub on Instagram, X, and LinkedIn</p>
            </div>
          </div>
        </div>

        <form
          className="rounded-xl border border-line bg-paper p-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <h2 className="font-display text-2xl font-bold text-ink">Contact form</h2>
          <div className="mt-5 space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-[13px] font-medium text-ink">Name</span>
              <input
                required
                className="w-full rounded-lg border border-line px-4 py-3 text-sm outline-none placeholder:text-[#a0aec0] focus:ring-2 focus:ring-teal"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[13px] font-medium text-ink">Email</span>
              <input
                required
                type="email"
                className="w-full rounded-lg border border-line px-4 py-3 text-sm outline-none placeholder:text-[#a0aec0] focus:ring-2 focus:ring-teal"
                placeholder="you@example.com"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[13px] font-medium text-ink">Message</span>
              <textarea
                required
                rows={5}
                className="w-full rounded-lg border border-line px-4 py-3 text-sm outline-none placeholder:text-[#a0aec0] focus:ring-2 focus:ring-teal"
                placeholder="How can we help?"
              />
            </label>
          </div>
          {sent ? (
            <p className="mt-4 rounded-lg bg-mist px-4 py-3 text-sm text-success">
              Thanks — your message is ready to send. (Demo form stores nothing yet.)
            </p>
          ) : (
            <Button type="submit" className="mt-5">
              Send message
            </Button>
          )}
        </form>
      </div>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-bold text-ink">FAQ</h2>
        <div className="mt-6 space-y-4">
          {faqItems.map((item) => (
            <div key={item.q} className="rounded-xl border border-line bg-paper p-5">
              <p className="font-semibold text-ink">{item.q}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
