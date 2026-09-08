"use client";
import { useEffect,useState } from "react";

export function SiteIntro(){
  const [visible,setVisible]=useState(false);const [leaving,setLeaving]=useState(false);
  useEffect(()=>{if(sessionStorage.getItem("portfolio-intro-seen"))return;const showFrame=requestAnimationFrame(()=>setVisible(true));document.body.style.overflow="hidden";const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;const timer=setTimeout(()=>dismiss(),reduced?500:2400);const escape=(event:KeyboardEvent)=>event.key==="Escape"&&dismiss();addEventListener("keydown",escape);return()=>{cancelAnimationFrame(showFrame);clearTimeout(timer);removeEventListener("keydown",escape);document.body.style.overflow=""}},[]);
  function dismiss(){sessionStorage.setItem("portfolio-intro-seen","true");setLeaving(true);setTimeout(()=>{setVisible(false);document.body.style.overflow=""},500)}
  if(!visible)return null;
  return <div className={`site-intro ${leaving?"site-intro-leaving":""}`} role="dialog" aria-label="Portfolio introduction" aria-modal="true"><button onClick={dismiss} className="intro-skip">Skip intro</button><div className="intro-content"><div className="intro-mark" aria-hidden="true">EG<span>.</span></div><p className="intro-kicker">Hello, I&apos;m Eduvigis Garcia</p><h1 className="intro-title">Quality is in<br/>the details.</h1><div className="intro-line"/><p className="intro-role">QA Engineer <span>+</span> Software Developer</p></div></div>;
}
