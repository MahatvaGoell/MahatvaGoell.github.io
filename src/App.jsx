import { useLayoutEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowUpRight, Asterisk, Pause, Play } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Navbar from './components/Navbar'
import SectionHeading from './components/SectionHeading'
import ProjectCard from './components/ProjectCard'
import ProjectDetail from './components/ProjectDetail'
import { achievements, profile, projects, skillGroups, stackRows } from './data/portfolio'

gsap.registerPlugin(ScrollTrigger)

function ExternalLink({ href, children }) {
  return <a className="underlined-link" href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={18} /></a>
}

export default function App() {
  const root = useRef(null)
  const lenis = useRef(null)
  const [detail, setDetail] = useState(null)
  const [marqueePaused, setMarqueePaused] = useState(false)

  useLayoutEffect(() => {
    const media = gsap.matchMedia()
    const context = gsap.context(() => {
      media.add('(prefers-reduced-motion: no-preference)', () => {
        const smooth = new Lenis({ lerp: 0.09, smoothWheel: true, anchors: { offset: -64 } })
        lenis.current = smooth
        smooth.on('scroll', ScrollTrigger.update)
        const tick = (time) => smooth.raf(time * 1000)
        gsap.ticker.add(tick)
        gsap.from('.hero-title .line > span', { yPercent: 105, rotate: 3, duration: 1.3, stagger: 0.13, ease: 'power4.out', delay: 0.1 })
        gsap.from('.hero-note, .hero-foot', { opacity: 0, y: 20, duration: 1, stagger: 0.1, delay: 0.4, ease: 'power3.out' })
        gsap.to('.rail-progress i', { scaleY: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: true } })
        gsap.utils.toArray('[data-reveal]').forEach((element) => gsap.from(element, { opacity: 0, y: 34, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 91%', once: true } }))
        gsap.from('.manifesto em', { opacity: 0.2, scrollTrigger: { trigger: '.manifesto', start: 'top 75%', end: 'center 40%', scrub: 1 } })
        gsap.from('.contact-title', { y: 60, opacity: 0, duration: 1.2, scrollTrigger: { trigger: '.contact', start: 'top 75%', once: true } })
        return () => { gsap.ticker.remove(tick); smooth.destroy(); lenis.current = null }
      })
    }, root)
    let disposed = false
    document.fonts.ready.then(() => { if (!disposed) ScrollTrigger.refresh() })
    return () => { disposed = true; media.revert(); context.revert() }
  }, [])

  const openProject = (project) => { lenis.current?.stop(); setDetail(project) }
  const closeProject = () => { setDetail(null); lenis.current?.start() }

  return <div ref={root} id="top" className="portfolio">
    <a href="#about" className="skip-link">Skip to content</a><Navbar />
    <main>
      <section className="hero page-padding" aria-labelledby="hero-heading">
        <div className="hero-topline"><span>INDEPENDENT MIND. CONNECTED SYSTEMS.</span><span>BASED IN NOIDA, INDIA</span></div>
        <h1 id="hero-heading" className="hero-title"><span className="line"><span>Mahatva</span></span><span className="line last-name"><span>Goel<span className="lime-period">.</span></span></span></h1>
        <div className="hero-note"><p>AI / ML Engineer<br />& Software Developer</p><span>Building intelligent systems at the intersection of AI, software and real-world problems.</span></div>
        <div className="hero-foot"><div className="hero-socials"><ExternalLink href={profile.github}>GitHub</ExternalLink><ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink><span className="unavailable" aria-label="Resume coming soon">Resume <small>soon</small></span></div><a className="scroll-invitation" href="#about"><span>A few chapters<br />of what comes next.</span><ArrowDown size={28} strokeWidth={1} /></a><span className="edition">SELECTED WORK<br />2026 EDITION</span></div>
      </section>

      <section id="about" className="intro light-section page-padding">
        <SectionHeading index="I" label="THE PERSON & THE PURPOSE">A curious mind.<br /><em>A practical approach.</em></SectionHeading>
        <div className="intro-grid"><div className="portrait-placeholder" role="img" aria-label="Space reserved for Mahatva’s portrait"><span className="portrait-mark">mg.</span><span className="portrait-label">PORTRAIT FORTHCOMING</span></div><div className="intro-copy" data-reveal><p className="lead">I’m Mahatva, a Computer Science Engineering student specialising in AI & ML at Amity University.</p><p>I enjoy connecting intelligent models with practical software engineering — from security tools to research workflows with multimodal sensor data.</p><p>I’m drawn to real problems, thoughtful experiments, and systems that make a difference beyond the screen.</p><a href="#work" className="underlined-link">Explore my work <ArrowDown size={18} /></a></div><div className="intro-side"><span>01 / IN PURSUIT OF UNDERSTANDING</span><Asterisk size={36} strokeWidth={1} /></div></div>
        <div className="manifesto" data-reveal><p>I build</p><h2>intelligent<br /><em>systems.</em></h2><div className="manifesto-disciplines"><span>ARTIFICIAL INTELLIGENCE</span><span>MACHINE LEARNING</span><span>DEEP LEARNING</span><span>SOFTWARE ENGINEERING</span></div></div>
      </section>

      <section id="work" className="work-section" aria-label="Selected projects">
        <div className="work-header page-padding"><p className="chapter-label"><span>CHAPTER II</span><span>SELECTED WORK</span></p><h2>Ideas, <em>made real.</em></h2></div>
        <div className="work-track">{projects.map((project) => <div className="spread-slot" key={project.slug}><ProjectCard project={project} onOpen={openProject} /></div>)}</div>
      </section>

      <section id="stack" className="stack-section light-section">
        <div className="page-padding"><SectionHeading index="III" label="THE ENGINEERING TOOLKIT">Built on<br /><em>solid foundations.</em></SectionHeading><div className="section-aside" data-reveal><p>From the first experiment to the final interface, the right tools turn an idea into something useful.</p></div></div>
        <div className={`marquee ${marqueePaused ? 'paused' : ''}`} aria-hidden="true"><div>{[0, 1].map((copy) => <div className="marquee-copy" key={copy}>{stackRows[0].map((item) => <span key={item}>{item}<Asterisk size={28} strokeWidth={1} /></span>)}</div>)}</div></div>
        <div className="page-padding"><button className="motion-toggle" onClick={() => setMarqueePaused(!marqueePaused)} aria-label={marqueePaused ? 'Play technology animation' : 'Pause technology animation'}>{marqueePaused ? <Play size={14} /> : <Pause size={14} />}<span>{marqueePaused ? 'Play motion' : 'Pause motion'}</span></button><div className="skill-groups">{skillGroups.map((group, index) => <div className="skill-row" data-reveal key={group.label}><span className="row-index">0{index + 1}</span><h3>{group.label}</h3><p>{group.items.map((item) => <span key={item}>{item}</span>)}</p></div>)}</div></div>
      </section>

      <section id="recognition" className="recognition page-padding"><SectionHeading index="IV" label="MOMENTS ALONG THE WAY">A little<br /><em>recognition.</em></SectionHeading><div className="recognition-list">{achievements.map((achievement) => <article data-reveal className="recognition-row" key={achievement.title}><div className="recognition-number">{achievement.value.split('\n').map((line) => <span key={line}>{line}</span>)}</div><div><p className="eyebrow">{achievement.title}</p><h3>{achievement.statement.replace('\n', ' ').toLowerCase()}</h3><p className="recognition-note">{achievement.note}</p></div><ArrowUpRight className="recognition-arrow" strokeWidth={0.7} /></article>)}</div></section>

      <section className="background-section light-section page-padding"><SectionHeading index="V" label="LEARNING & CONTRIBUTING">Beyond<br /><em>the code.</em></SectionHeading><div className="background-rows"><article data-reveal><p className="eyebrow">2024 — 2028 / EDUCATION</p><div><h3>Amity University</h3><p>Bachelor of Technology · Computer Science & Engineering<br />AI & ML Honors · Noida</p></div></article><article data-reveal><p className="eyebrow">JAN 2025 — PRESENT / COMMUNITY</p><div><h3>GeeksforGeeks</h3><h4>Core Team Member</h4><p>Planning, registrations, participant coordination, logistics and event execution.</p></div></article><article data-reveal><p className="eyebrow">2026 / CONTRIBUTION</p><div><h3>CONFLUENCE</h3><h4>16th International Conference</h4><p>Certificate of Appreciation for contribution to the conference on Cloud Computing, Data Science & Engineering at Amity University.</p></div></article></div></section>

      <section id="contact" className="contact page-padding"><p className="chapter-label"><span>CHAPTER VI</span><span>LET’S START A CONVERSATION</span></p><h2 className="contact-title">Let’s build<br /><em>something.</em><ArrowUpRight strokeWidth={0.65} /></h2><div className="contact-body"><p>Have an idea, opportunity, collaboration<br />or just want to talk?</p><a href={`mailto:${profile.email}`} className="contact-email">{profile.email}<ArrowUpRight size={24} /></a></div><div className="contact-bottom"><a href={`mailto:${profile.email}`} className="underlined-link">Get in touch <ArrowUpRight size={18} /></a><div><ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink><ExternalLink href={profile.github}>GitHub</ExternalLink><span className="unavailable">Resume <small>soon</small></span></div></div></section>
    </main>
    <footer className="site-footer page-padding"><span>© 2026 MAHATVA GOEL</span><span>THOUGHTFULLY BUILT WITH REACT + GSAP</span><a href="#top">BACK TO TOP ↑</a></footer>
    {detail && <ProjectDetail project={detail} onClose={closeProject} />}
  </div>
}
