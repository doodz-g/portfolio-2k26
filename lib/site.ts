export const siteConfig = {
  name: "Eduvigis Garcia",
  title: "QA Engineer & Software Tester",
  description:
    "QA Engineer specializing in thoughtful test strategy, reliable releases, and user-centered software quality.",
  // Override this with NEXT_PUBLIC_SITE_URL when connecting a future custom domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://eduvigis-garcia.vercel.app",
  email: "eduvigisgarcia88@gmail.com",
  linkedin: "https://www.linkedin.com/in/eduvigis-garcia/",
  github: "https://github.com/",
  resume: "/resume/Eduvigis-Garcia-Resume.pdf",
} as const;
