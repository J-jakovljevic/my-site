import type { PipelineStage } from "@models/resume";

export const highlights = [
  { label: "Years", value: "4+" },
  { label: "Projects", value: "10+" },
  { label: "Industries", value: "7" },
];

export const buildPipeline: PipelineStage[] = [
  {
    title: "Frontend Architecture",
    description: "Building codebases that stay maintainable as products grow.",
    responsibilities: [
      "Project structure",
      "Engineering standards",
      "Design systems",
      "Reusable component architecture",
    ],
    technologies: [
      "Monorepo",
      "Vite",
      "Design Systems",
      "Architecture Patterns",
    ],
  },
  {
    title: "Frontend",
    description:
      "Building performant, accessible and production-ready user interfaces.",
    responsibilities: [
      "Leading frontend development",
      "Cross-platform mobile development",
      "Mentoring engineers",
      "Feature ownership",

      "Performance optimization",
      "Responsive & accessible UI",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "React Query",
      "React Hooks",
      "HTML",
      "CSS",
      "Tailwind",
      "Mantine",
      "Bootstrap",
      "Capacitor",
      "Recharts",
      "Jest",
    ],
  },
  {
    title: "Backend",
    description:
      "Building APIs and backend services that support reliable production software.",
    responsibilities: [
      "Business logic",
      "Database integration",
      "Background jobs & queues",
      "REST API development",
      "Unit & integration testing",
    ],
    technologies: [
      "NestJS",
      "Spring Boot",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "Firestore",
      "Redis",
      "Bull",
      "Docker",
      "Jest",
    ],
  },
  {
    title: "Real-time",
    description:
      "Designing systems that react instantly to live data from connected devices.",
    responsibilities: [
      "IoT platforms",
      "Live dashboards",
      "WebSocket-based features",
    ],
    technologies: ["WebSockets", "IoT", "Live Charts", "Recharts"],
  },
  {
    title: "Production",
    description:
      "Shipping products to production and helping engineering teams deliver reliable software consistently.",
    responsibilities: [
      "Production releases",
      "CI/CD",
      "Code reviews",
      "Client partnership",
      "AI-assisted development",
    ],
    technologies: [
      "Git",
      "GitHub",
      "GitLab",
      "CI/CD",
      "Scrum",
      "Agile",
      "AI-assisted Development",
    ],
  },
];

export const featuredProject = {
  label: "My favourite project",
  title: "IoT Energy Management Platform",
  description:
    "The project I’m proudest of is a real-time energy management platform for a Dutch clean-tech startup. I established the frontend architecture from scratch, defining the project’s structure and engineering standards for a team of up to six engineers. As the product evolved, I expanded into full-stack development, delivering production-ready features across web, mobile and backend, including real-time WebSocket integrations with IoT hardware. I also mentored engineers, performed code reviews and worked closely with clients and product owners throughout the development process.",
};

export const closingStatement = {
  message: "Let’s build software people actually use  🚀",
  ctaLabel: "Get in touch",
};
