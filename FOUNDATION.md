# SKILLHUB — ANTIGRAVITY FOUNDATION FILE
## Master Instructions for Full Application Generation
### Version 1.0 | Prepared by Zippatek Digital Ltd | September 2026

---

> **HOW TO USE THIS FILE**
> This is your single source of truth. Every screen, component, and interaction must conform to these specifications. Do not deviate. Do not invent new patterns. Build section by section, screen by screen.

---

## 0. STACK & TOOLING

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 (tokens in `globals.css`) |
| Auth | Local mock auth (Zustand + localStorage) — upgrade to NextAuth later |
| Icons | Lucide React (stroke-only) |
| Fonts | Outfit (display) + Figtree (body) |
| State | Zustand |
| Forms | React Hook Form + Zod |
| Animations | Framer Motion (subtle, trust-first) |

---

## 1. PRODUCT IDENTITY

- **Brand:** SkillHub
- **Tagline:** Learn a Skill. Build Your Future.
- **Promise:** Practical digital skills — learn, practise, assess, build a portfolio.
- **Journey:** Learn → Practise → Assessment → Portfolio → Opportunities

---

## 2. COLOR SYSTEM

```css
--ink: #07261F;           /* primary brand dark */
--ink-soft: #0E3B30;      /* dark panels */
--teal: #0F766E;          /* primary action */
--teal-hover: #0D5F59;
--coral: #E85D04;         /* secondary CTA / energy */
--mist: #F3F7F5;          /* page background */
--paper: #FFFFFF;         /* cards / surfaces */
--muted: #5C6B66;         /* body secondary */
--line: #D5E0DB;          /* borders */
--success: #15803D;
--danger: #B91C1C;
```

**Rules:**
- Never use purple gradients or cream/terracotta “AI default” looks
- Never use teal as a full-bleed background; keep it for actions and accents
- Dark panels use `--ink` / `--ink-soft` only

---

## 3. TYPOGRAPHY

- Display / H1–H2: Outfit (600–800)
- Body / UI: Figtree (400–600)
- No all-caps body text. No serif. No text shadows.
- Left-align body copy. Center only standalone CTAs and badges.

---

## 4. VERSION ROADMAP

### Version 1 — MVP (build now)
Home → Courses → Virtual Assistance Course → Registration/Login → Learning → Quiz → Progress

### Version 2
Graphic Design + Digital Marketing + Content Creation (full content)

### Version 3
Portfolio + Certificates + Opportunity / client connections

---

## 5. ROUTE STRUCTURE

```
app/
├── (marketing)/          # public site shell
│   ├── page.tsx          # Home
│   ├── courses/
│   ├── how-it-works/
│   ├── about/
│   ├── pricing/
│   └── contact/
├── (auth)/
│   ├── login/
│   └── signup/
└── dashboard/
    ├── page.tsx          # Overview
    ├── learn/[lessonId]/
    ├── assessment/[courseId]/
    ├── progress/
    ├── certificates/     # V3 shell
    ├── portfolio/        # V3 shell
    └── profile/
```

---

## 6. MVP COURSE — VIRTUAL ASSISTANCE

Featured / only fully built course in V1.

**Modules:**
1. Introduction to Virtual Assistance
2. Communication & Email Management
3. Scheduling & Organization
4. Data Entry
5. Online Research
6. Practical Project
7. Final Assessment

**Skills taught:** Email management, Scheduling, Data entry, Online research, Customer support, Basic productivity tools

---

## 7. COPY RULES

- Warm, direct, practical — like a mentor talking to a young learner
- Avoid: premium, seamless, revolutionary, game-changer, innovative, state-of-the-art
- Prefer: practical, flexible, affordable, build, practise, portfolio, opportunities

---

## 8. BANNED PATTERNS

1. No purple themes
2. No solid/filled Lucide icons — stroke only
3. No harsh multi-layer shadows
4. No emojis in formal chrome (ok in welcome banners / chat-like moments)
5. Cards only when they contain a clear interaction or learning unit
6. Start small — do not build V2/V3 depth before V1 is testable with real learners
