import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { caseStudies } from "@/data/caseStudies";
import { projects } from "@/data/projects";
export default function sitemap():MetadataRoute.Sitemap{return [
  {url:siteConfig.url,lastModified:new Date(),changeFrequency:"monthly",priority:1},
  ...caseStudies.map(({slug})=>({url:`${siteConfig.url}/case-studies/${slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.8})),
  ...projects.map(({slug})=>({url:`${siteConfig.url}/projects/${slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.7})),
]}
