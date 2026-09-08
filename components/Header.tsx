"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const links = [["Home","top"],["About","about"],["Experience","experience"],["Case Studies","case-studies"],["Skills","skills"],["QA Artifact","qa-artifact"],["Contact","contact"]] as const;

export function Header() {
  const pathname=usePathname();
  const [open,setOpen]=useState(false);
  const [active,setActive]=useState("top");
  useEffect(()=>{const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.isIntersecting&&setActive(entry.target.id)),{rootMargin:"-30% 0px -65%",threshold:0});links.forEach(([,id])=>{const el=document.getElementById(id);if(el)observer.observe(el)});return()=>observer.disconnect()},[]);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[rgba(245,243,235,.94)] backdrop-blur-xl">
    <div className="container flex h-[76px] items-center justify-between">
      <a href={pathname==="/"?"#top":"/#top"} className="focus-ring display text-xl font-extrabold" aria-label="Eduvigis Garcia home">EG<span className="text-[var(--orange)]">.</span></a>
      <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">{links.map(([label,id])=><a key={id} href={`${pathname==="/"?"":"/"}#${id}`} aria-current={pathname==="/"&&active===id?"location":undefined} className={`nav-link ${pathname==="/"&&active===id?"nav-link-active":""}`}>{label}</a>)}</nav>
      <a href={`${pathname==="/"?"":"/"}#contact`} className="button button-primary hidden !min-h-10 !px-4 text-sm lg:inline-flex">Let&apos;s talk</a>
      <button className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-[var(--line)] lg:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open} aria-controls="mobile-menu"><FontAwesomeIcon icon={open?faXmark:faBars}/></button>
    </div>
    {open&&<nav id="mobile-menu" className="container grid max-h-[calc(100vh-76px)] grid-cols-2 gap-1 overflow-auto border-t border-[var(--line)] py-4 lg:hidden" aria-label="Mobile navigation">{links.map(([label,id])=><a key={id} href={`${pathname==="/"?"":"/"}#${id}`} onClick={()=>setOpen(false)} className="focus-ring rounded-xl px-3 py-3 text-base font-bold hover:bg-white/60">{label}</a>)}</nav>}
  </header>;
}
