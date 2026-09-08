import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { siteConfig } from "@/lib/site";

export function Footer(){
  const emailHref=siteConfig.email?`mailto:${siteConfig.email}`:"mailto:?subject=QA%20opportunity%20for%20Eduvigis%20Garcia";
  return <footer id="contact" className="bg-[var(--ink)] py-16 text-white">
    <div className="container grid gap-12 md:grid-cols-[1.5fr_1fr] md:items-end">
      <div><p className="eyebrow text-[var(--mint)]">Let&apos;s work together</p><h2 className="display mt-6 max-w-3xl text-5xl font-extrabold leading-[1.02] sm:text-6xl">Ready to make your next release feel effortless?</h2></div>
      <div className="flex flex-col gap-3">
        <a className="button button-accent" href={emailHref}><FontAwesomeIcon icon={faEnvelope} className="h-4"/>Email me</a>
        <div className="grid grid-cols-2 gap-3"><a className="button border-white/25" href={siteConfig.linkedin} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn}/>LinkedIn</a><a className="button border-white/25" href={siteConfig.github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/>GitHub</a></div>
      </div>
    </div>
    <div className="container mt-16 flex flex-col gap-3 border-t border-white/15 pt-7 text-sm text-white/55 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} {siteConfig.name}. Built with care and tested twice.</p><a href="#top" className="font-bold text-white">Back to top <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-1 h-3"/></a></div>
  </footer>
}
