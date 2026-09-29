export type CourseLevel = "Beginner" | "Intermediate";
export type CourseStatus = "available" | "coming-soon";

export type Lesson = {
  id: string;
  order: number;
  title: string;
  duration: string;
  videoLabel: string;
  notes: string[];
  task: {
    title: string;
    prompt: string;
  };
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
};

export type Course = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  duration: string;
  level: CourseLevel;
  price: string;
  priceNote: string;
  status: CourseStatus;
  featured: boolean;
  icon: "va" | "design" | "marketing" | "content";
  image: string;
  imageAlt: string;
  skills: string[];
  modules: string[];
  lessons: Lesson[];
  quiz: QuizQuestion[];
};

export const courses: Course[] = [
  {
    id: "va-beginner",
    slug: "virtual-assistance",
    name: "Virtual Assistance",
    shortDescription:
      "Learn to manage emails, schedules, research, and client support as a professional VA.",
    description:
      "A practical beginner course that teaches the core skills employers and clients expect from virtual assistants. Learn by doing — with real tasks, feedback moments, and a final assessment.",
    duration: "6 weeks",
    level: "Beginner",
    price: "₦25,000",
    priceNote: "Full course access",
    status: "available",
    featured: true,
    icon: "va",
    image: "/images/skill-virtual-assistance.png",
    imageAlt: "Young woman learning virtual assistance skills on a laptop",
    skills: [
      "Email management",
      "Scheduling",
      "Data entry",
      "Online research",
      "Customer support",
      "Basic productivity tools",
    ],
    modules: [
      "Introduction to Virtual Assistance",
      "Communication & Email Management",
      "Scheduling & Organization",
      "Data Entry",
      "Online Research",
      "Practical Project",
      "Final Assessment",
    ],
    lessons: [
      {
        id: "va-1",
        order: 1,
        title: "Introduction to Virtual Assistance",
        duration: "12 min",
        videoLabel: "What a virtual assistant actually does",
        notes: [
          "A virtual assistant supports businesses remotely with admin, communication, and research tasks.",
          "Reliability, clear communication, and organisation matter more than fancy tools.",
          "You can start with core skills and grow into specialised VA roles.",
        ],
        task: {
          title: "Define your VA offer",
          prompt:
            "Write 4–5 sentences describing the services you would offer as a beginner virtual assistant and who you would help.",
        },
      },
      {
        id: "va-2",
        order: 2,
        title: "Communication Basics",
        duration: "15 min",
        videoLabel: "Professional tone in messages and chats",
        notes: [
          "Keep messages clear, polite, and action-oriented.",
          "Confirm understanding before acting on vague requests.",
          "Use a consistent greeting, body, and closing in professional emails.",
        ],
        task: {
          title: "Rewrite a vague reply",
          prompt:
            "Rewrite this reply to sound clearer and more professional: “Ok I’ll check and get back.”",
        },
      },
      {
        id: "va-3",
        order: 3,
        title: "Email Management",
        duration: "18 min",
        videoLabel: "Inbox triage and customer email replies",
        notes: [
          "Sort emails by urgency: act now, schedule later, or archive.",
          "Acknowledge the customer’s concern before offering a solution.",
          "Always include next steps and expected timelines.",
        ],
        task: {
          title: "Practical Task",
          prompt:
            "Create a professional email response to a customer asking about a delayed order.",
        },
      },
      {
        id: "va-4",
        order: 4,
        title: "Scheduling & Organization",
        duration: "14 min",
        videoLabel: "Calendars, reminders, and meeting setup",
        notes: [
          "Confirm time zones before booking meetings.",
          "Protect focus blocks for deep work when managing someone else’s calendar.",
          "Send clear agendas and meeting links in advance.",
        ],
        task: {
          title: "Draft a weekly schedule",
          prompt:
            "Create a sample weekly calendar for a small business owner with meetings, follow-ups, and admin blocks.",
        },
      },
      {
        id: "va-5",
        order: 5,
        title: "Data Entry",
        duration: "12 min",
        videoLabel: "Accurate records without wasting time",
        notes: [
          "Accuracy beats speed — then improve speed with templates.",
          "Use consistent naming and date formats.",
          "Double-check numbers, emails, and phone fields before submitting.",
        ],
        task: {
          title: "Clean a sample list",
          prompt:
            "List 5 checks you would run before submitting a spreadsheet of customer contacts.",
        },
      },
      {
        id: "va-6",
        order: 6,
        title: "Online Research",
        duration: "16 min",
        videoLabel: "Finding reliable information quickly",
        notes: [
          "Start with a clear research question and success criteria.",
          "Compare at least two credible sources before summarising.",
          "Present findings in a short, scannable format for busy clients.",
        ],
        task: {
          title: "Research brief",
          prompt:
            "Research three affordable project management tools for a 5-person team and summarise pros/cons in under 150 words.",
        },
      },
      {
        id: "va-7",
        order: 7,
        title: "Practical Project",
        duration: "25 min",
        videoLabel: "Putting VA skills together",
        notes: [
          "Combine email, scheduling, and research into one client workflow.",
          "Document what you did so your work is easy to hand over.",
          "Treat this project as a portfolio piece.",
        ],
        task: {
          title: "Mini client simulation",
          prompt:
            "Imagine a bakery owner needs help this week. Outline the emails you would send, the schedule you would set, and one research task you would complete.",
        },
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "Which of the following is an important responsibility of a virtual assistant?",
        options: [
          "Managing emails",
          "Performing surgery",
          "Driving a bus",
          "Building houses",
        ],
        correctIndex: 0,
      },
      {
        id: "q2",
        question: "What should you do first when a customer emails about a delayed order?",
        options: [
          "Ignore the email until the order arrives",
          "Acknowledge the concern and explain next steps",
          "Ask them to call a different company",
          "Delete the email to clear your inbox",
        ],
        correctIndex: 1,
      },
      {
        id: "q3",
        question: "Why is confirming time zones important when scheduling meetings?",
        options: [
          "It makes calendars look colourful",
          "It helps avoid booking people at the wrong local time",
          "It replaces the need for meeting agendas",
          "It is only useful for international celebrities",
        ],
        correctIndex: 1,
      },
      {
        id: "q4",
        question: "What matters most in data entry work?",
        options: [
          "Typing as fast as possible with no checks",
          "Using random formats for dates and names",
          "Accuracy, then consistent formatting",
          "Avoiding spreadsheets entirely",
        ],
        correctIndex: 2,
      },
      {
        id: "q5",
        question: "A strong research summary for a client should be:",
        options: [
          "Long, technical, and hard to scan",
          "Based on one unverified blog post",
          "Clear, scannable, and backed by credible sources",
          "Written only in abbreviations",
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "gd-beginner",
    slug: "graphic-design",
    name: "Graphic Design",
    shortDescription:
      "Create posters, social graphics, and brand visuals with practical design foundations.",
    description:
      "Coming in Version 2. Learn visual hierarchy, layout, and tools used to create client-ready designs.",
    duration: "8 weeks",
    level: "Beginner",
    price: "Coming soon",
    priceNote: "Version 2",
    status: "coming-soon",
    featured: false,
    icon: "design",
    image: "/images/skill-graphic-design.png",
    imageAlt: "Young man practising graphic design on a laptop",
    skills: ["Layout basics", "Typography", "Brand visuals", "Social creatives"],
    modules: ["Design foundations", "Tools & workflow", "Client projects"],
    lessons: [],
    quiz: [],
  },
  {
    id: "dm-beginner",
    slug: "digital-marketing",
    name: "Digital Marketing",
    shortDescription:
      "Plan campaigns, grow audiences, and measure results across digital channels.",
    description:
      "Coming in Version 2. Learn practical marketing systems for small businesses and creators.",
    duration: "8 weeks",
    level: "Beginner",
    price: "Coming soon",
    priceNote: "Version 2",
    status: "coming-soon",
    featured: false,
    icon: "marketing",
    image: "/images/skill-digital-marketing.png",
    imageAlt: "Young woman reviewing digital marketing analytics on laptop and phone",
    skills: ["Social strategy", "Content planning", "Ads basics", "Analytics"],
    modules: ["Marketing fundamentals", "Channel strategy", "Campaign project"],
    lessons: [],
    quiz: [],
  },
  {
    id: "cc-beginner",
    slug: "content-creation",
    name: "Content Creation",
    shortDescription:
      "Script, shoot, and edit content that builds attention and trust online.",
    description:
      "Coming in Version 2. Build a repeatable content system from idea to published piece.",
    duration: "6 weeks",
    level: "Beginner",
    price: "Coming soon",
    priceNote: "Version 2",
    status: "coming-soon",
    featured: false,
    icon: "content",
    image: "/images/skill-content-creation.png",
    imageAlt: "Young content creator filming with a smartphone on a desk tripod",
    skills: ["Scripting", "Short-form video", "Editing basics", "Publishing cadence"],
    modules: ["Creative foundations", "Production", "Growth systems"],
    lessons: [],
    quiz: [],
  },
];

export function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug);
}

export function getFeaturedCourse() {
  return courses.find((course) => course.featured) ?? courses[0];
}

export function getLessonById(lessonId: string) {
  for (const course of courses) {
    const lesson = course.lessons.find((item) => item.id === lessonId);
    if (lesson) {
      return { course, lesson };
    }
  }
  return null;
}

export const howItWorksSteps = [
  "Create an account",
  "Choose a skill",
  "Learn at your own time",
  "Practise through tasks",
  "Complete assessments",
  "Build your portfolio",
  "Prepare for opportunities",
];

export const pricingPlans = [
  {
    name: "Free",
    price: "₦0",
    description: "Start exploring SkillHub with no payment.",
    features: ["Selected introductory lessons", "Basic resources", "Progress tracking preview"],
    cta: "Get Started",
    href: "/signup",
    highlighted: false,
  },
  {
    name: "Premium Course",
    price: "₦25,000",
    description: "Full Virtual Assistance beginner track.",
    features: [
      "Full course access",
      "Practical assignments",
      "Assessments",
      "Certificate (Version 3)",
      "Portfolio projects (Version 3)",
    ],
    cta: "Enroll Now",
    href: "/courses/virtual-assistance",
    highlighted: true,
  },
];

export const faqItems = [
  {
    q: "Do I need any experience to start?",
    a: "No. Virtual Assistance — Beginner Course is designed for first-time learners.",
  },
  {
    q: "Can I learn on my phone?",
    a: "Yes. SkillHub is built to work on mobile and desktop so you can learn at your own time.",
  },
  {
    q: "Will I get a certificate?",
    a: "Certificates are planned for Version 3. In Version 1 you can complete lessons, tasks, and the quiz.",
  },
  {
    q: "How do I contact SkillHub?",
    a: "Use the contact form, email, or WhatsApp links on the Contact page.",
  },
];
