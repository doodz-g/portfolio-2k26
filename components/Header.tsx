"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { siteConfig } from "@/lib/site";

const links = [["Work","#work"],["Expertise","#expertise"],["Case studies","#case-studies"],["About","#about"]];
export function Header() {
  const [open,setOpen]=useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[rgba(245,243,235,.9)] backdrop-blur-xl">
    <div className="container flex h-[76px] items-center justify-between">
      <a href="#top" className="display text-xl font-extrabold" aria-label="Home">EG<span className="text-[var(--orange)]">.</span></a>
      <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
        {links.map(([label,href])=><a key={href} href={href} className="text-sm font-bold transition-opacity hover:opacity-55">{label}</a>)}
      </nav>
      <a href={siteConfig.resume} download className="button button-primary hidden !min-h-10 !px-4 text-sm md:inline-flex">Resume <FontAwesomeIcon icon={faArrowDown} className="h-3" /></a>
      <button className="grid h-11 w-11 place-items-center rounded-full border border-[var(--line)] md:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}><FontAwesomeIcon icon={open?faXmark:faBars} /></button>
    </div>
    {open&&<nav className="container flex flex-col gap-1 border-t border-[var(--line)] py-4 md:hidden" aria-label="Mobile navigation">{links.map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)} className="rounded-xl px-3 py-3 text-lg font-bold hover:bg-white/60">{label}</a>)}<a href={siteConfig.resume} download className="button button-primary mt-3">Download Resume</a></nav>}
  </header>;
}
