import type { PipelineStage, Testimonial } from "@models/resume";

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

export const testimonials: Testimonial[] = [
  {
    quote: [
      "I had the pleasure to work with Jovana on our rather complex project, where we build an app for energy management in The Netherlands.",
      "In my role as product owner of that app, I was in close daily contact with Jovana. I really appreciated her communication skills; she was always available and always ready to think along with us about the best implementation for our feature requirements. From our briefing Jovana immediately understands our requests and starts implementing it in our React+Mantine-based project, with very good eye for detail.",
      "That eye for detail is also visible when it comes to testing: Jovana can catch the smallest bugs/UI-issues and fix them right away. That's very welcome in an app/project that keeps getting larger and more complicated.",
      "I have always been impressed by Jovana's perseverance to get to the best result. Even when things become very complicated or tasks take much time, Jovana is determined to finish her job in the best way possible.",
      "All in all I would certainly recommend Jovana, as she will be a great addition to any software development team.",
    ],
    name: "Jurgen van den Brink",
    title: "Product Owner Software",
    source: "Recommended on LinkedIn · May 2026",
  },
];

export const closingStatement = {
  message: "Let’s build software people actually use!",
  ctaLabel: "Get in touch",
};
