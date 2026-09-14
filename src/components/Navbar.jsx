import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [['work', 'Selected work'], ['about', 'About me'], ['stack', 'Engineering stack'], ['recognition', 'Recognition'], ['contact', 'Let’s talk']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggle = useRef(null)
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  useEffect(() => {
    const escape = (event) => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus() } }
    if (open) window.addEventListener('keydown', escape)
    return () => window.removeEventListener('keydown', escape)
  }, [open])
  return <>
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'menu-is-open' : ''}`}>
      <a href="#top" className="wordmark" onClick={() => setOpen(false)} aria-label="Mahatva Goel — home">MG<span>.</span></a>
      <p className="header-note">AI / ML & SOFTWARE ENGINEERING</p>
      <button ref={toggle} className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-menu"><span>{open ? 'Close' : 'Explore'}</span>{open ? <X size={22} /> : <Menu size={22} />}</button>
      <nav id="site-menu" className="site-menu" aria-label="Primary navigation" hidden={!open}>
        {links.map(([id, label], index) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}><small>0{index + 1}</small><span>{label}</span><ArrowUpRight /></a>)}
        <p>Thoughtful code. Real-world possibilities.</p>
      </nav>
    </header>
    <aside className="edition-rail" aria-hidden="true"><span>MAHATVA GOEL</span><div className="rail-progress"><i /></div><span>PORTFOLIO — 2026</span></aside>
  </>
}
