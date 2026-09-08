import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown, faCheck, faFlask, faBug, faCodeBranch, faGaugeHigh, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

const skills=["Test strategy","Manual testing","API testing","Regression","Exploratory testing","Defect management","Cross-browser QA","Agile delivery","SQL validation","Accessibility"];
const cases=[
  {no:"01",title:"Checkout confidence",kind:"E-commerce · End-to-end QA",copy:"Mapped critical purchase paths, exposed edge cases around failed payments, and shaped a focused regression suite for safer releases.",image:"/projects/checkout-testing.svg",tags:["Risk analysis","API testing","Regression"]},
  {no:"02",title:"Release without surprises",kind:"SaaS · Quality strategy",copy:"Turned a growing product into a clear, repeatable release process with test charters, actionable defect reports, and visible quality gates.",image:"/projects/saas-dashboard.svg",tags:["Test planning","Exploratory QA","Reporting"]},
  {no:"03",title:"Mobile journeys that hold up",kind:"Responsive web · Compatibility",copy:"Validated real customer journeys across breakpoints and browsers, catching layout, state, and accessibility issues before launch.",image:"/projects/mobile-qa.svg",tags:["Responsive QA","Accessibility","UX review"]},
];

export default function Home(){return <>
  <Header/>
  <main id="top">
    <section className="relative min-h-[760px] overflow-hidden pt-[76px] grid-lines">
      <div className="absolute -right-32 top-16 h-[520px] w-[520px] rounded-full bg-[var(--mint)]/45 blur-3xl"/>
      <div className="container relative grid min-h-[684px] items-center gap-10 py-16 lg:grid-cols-[1.3fr_.7fr]">
        <div><span className="pill bg-white/60"><span className="h-2 w-2 rounded-full bg-green-500"/>Available for QA opportunities</span>
          <h1 className="display mt-7 max-w-4xl text-[clamp(3.7rem,8.5vw,7.6rem)] font-extrabold leading-[.9]">I find what<br/>others <span className="relative inline-block text-[var(--orange)]">miss.<svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 350 18" aria-hidden="true"><path d="M3 12C94 3 239 5 347 9" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/></svg></span></h1>
          <p className="mt-9 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">I&apos;m {siteConfig.name}, a QA Engineer who turns complex products into dependable experiences—through sharp test thinking, useful feedback, and a genuine care for the people using the software.</p>
          <div className="mt-9 flex flex-wrap gap-3"><a href="#case-studies" className="button button-primary">Explore my work <FontAwesomeIcon icon={faArrowRight} className="h-4"/></a><a href={siteConfig.resume} download className="button bg-white/60">Download resume <FontAwesomeIcon icon={faArrowDown} className="h-4"/></a></div>
        </div>
        <div className="relative hidden lg:block"><div className="rotate-3 rounded-[2rem] border border-[var(--ink)] bg-white p-5 shadow-[18px_18px_0_var(--ink)]"><div className="flex items-center justify-between border-b border-[var(--line)] pb-4"><span className="text-xs font-extrabold uppercase tracking-widest">Release health</span><span className="pill !border-green-200 !bg-green-50 !px-3 !py-1 text-green-700">Ready</span></div><div className="py-8"><p className="display text-7xl font-extrabold">98<span className="text-3xl text-[var(--muted)]">%</span></p><p className="mt-2 text-sm text-[var(--muted)]">Critical paths covered</p></div>{["Core journeys verified","API responses validated","Browser matrix complete"].map(x=><div key={x} className="flex items-center gap-3 border-t border-[var(--line)] py-4 text-sm font-bold"><span className="grid h-6 w-6 place-items-center rounded-full bg-[var(--mint)]"><FontAwesomeIcon icon={faCheck} className="h-3"/></span>{x}</div>)}</div></div>
      </div>
    </section>

    <section id="expertise" className="section bg-white"><div className="container"><p className="eyebrow text-[var(--orange)]">How I create confidence</p><div className="mt-7 grid gap-8 lg:grid-cols-[.9fr_1.1fr]"><h2 className="display text-4xl font-extrabold leading-tight sm:text-6xl">Quality is a team sport.<br/>I bring the game plan.</h2><p className="max-w-xl text-lg leading-8 text-[var(--muted)] lg:justify-self-end">Great QA goes beyond finding bugs. I help teams see risk earlier, communicate clearly, and ship with a shared understanding of what “ready” really means.</p></div>
      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 lg:grid-cols-4">{[
        [faFlask,"Test with intent","Risk-based plans and exploratory sessions focused on what matters most."],
        [faBug,"Report with clarity","Reproducible defects with context, evidence, and useful priority."],
        [faCodeBranch,"Fit the workflow","Quality practices that work naturally inside agile delivery."],
        [faGaugeHigh,"Improve the signal","Lean regression coverage and release feedback teams can trust."],
      ].map(([icon,title,copy])=><article key={String(title)} className="bg-white p-7"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--cream)] text-[var(--orange)]"><FontAwesomeIcon icon={icon as typeof faFlask}/></span><h3 className="display mt-8 text-xl font-extrabold">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{String(copy)}</p></article>)}</div>
      <div className="mt-10 flex flex-wrap gap-2">{skills.map(skill=><span key={skill} className="pill bg-[var(--cream)]">{skill}</span>)}</div>
    </div></section>

    <section id="case-studies" className="section"><div className="container"><div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow text-[var(--orange)]">Selected case studies</p><h2 className="display mt-6 text-5xl font-extrabold sm:text-7xl">Proof in the process.</h2></div><p className="max-w-sm text-[var(--muted)]">Representative QA engagements showing how I approach risk, investigation, and release confidence.</p></div>
      <div id="work" className="mt-14 space-y-8">{cases.map((item,i)=><article key={item.no} className="group grid overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white lg:grid-cols-2"><div className={`relative min-h-[330px] overflow-hidden ${i===1?"lg:order-2":""}`}><Image src={item.image} alt={`${item.title} project visualization`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"/></div><div className="flex flex-col justify-center p-8 sm:p-12"><div className="flex items-center justify-between"><span className="display text-4xl font-extrabold text-[var(--orange)]">{item.no}</span><span className="text-xs font-extrabold uppercase tracking-widest text-[var(--muted)]">{item.kind}</span></div><h3 className="display mt-10 text-3xl font-extrabold sm:text-4xl">{item.title}</h3><p className="mt-4 leading-7 text-[var(--muted)]">{item.copy}</p><div className="mt-8 flex flex-wrap gap-2">{item.tags.map(t=><span className="pill !py-2" key={t}>{t}</span>)}</div></div></article>)}</div>
    </div></section>

    <section id="about" className="section bg-[var(--mint)]"><div className="container grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">A little about me</p><div className="mt-10 grid h-32 w-32 place-items-center rounded-full border-2 border-[var(--ink)] bg-[var(--orange)] text-5xl">✦</div></div><div><FontAwesomeIcon icon={faQuoteLeft} className="h-8 opacity-35"/><blockquote className="display mt-6 text-3xl font-extrabold leading-tight sm:text-5xl">I believe the best testers are curious advocates—part detective, part translator, always thinking about the human on the other side of the screen.</blockquote><p className="mt-8 max-w-2xl text-lg leading-8">My approach combines structured test coverage with the freedom to explore. I ask the questions that uncover assumptions, document what matters, and partner closely with product and engineering to make every release stronger than the last.</p></div></div></section>
  </main><Footer/>
</>}
