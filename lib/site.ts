const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteConfig = {
  name: "Eduvigis Garcia",
  title: "QA Engineer & Software Tester",
  description:
    "QA Engineer specializing in thoughtful test strategy, reliable releases, and user-centered software quality.",
  // This fallback makes metadata work before a custom domain is connected.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? (deploymentHost ? `https://${deploymentHost}` : "https://example.com"),
  email: "",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  resume: "/resume/Eduvigis-Garcia-Resume.pdf",
} as const;
