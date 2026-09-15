import { useEffect, useRef } from 'react'
import { ArrowUpRight, X } from 'lucide-react'

const roman = ['I', 'II', 'III', 'IV']

export default function ProjectDetail({ project, onClose }) {
  const dialog = useRef(null)
  const study = project.caseStudy

  useEffect(() => {
    const node = dialog.current
    const previousFocus = document.activeElement
    node.showModal()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { node.close(); document.body.style.overflow = previousOverflow; previousFocus?.focus({ preventScroll: true }) }
  }, [])

  return <dialog className="project-dialog" ref={dialog} onCancel={(event) => { event.preventDefault(); onClose() }} onClick={(event) => { if (event.target === dialog.current) onClose() }} aria-labelledby="project-dialog-title" data-lenis-prevent>
    <article className="dialog-inner">
      <button className="dialog-close" onClick={onClose} aria-label="Close project details" autoFocus><X /></button>
      <header className="case-header">
        <p className="eyebrow">SELECTED WORK / {project.number}</p>
        <h2 id="project-dialog-title">{project.name}</h2>
        <p className="dialog-description">{project.description}</p>
        <dl className="case-meta"><div><dt>focus</dt><dd>{study.role}</dd></div><div><dt>year</dt><dd>{study.year}</dd></div></dl>
      </header>

      <nav className="case-nav" aria-label={`${project.name} case study contents`}>
        <span>On this page</span>
        <ol>{study.sections.map((section) => <li key={section.id}><a href={`#${project.slug}-${section.id}`}>{section.label.toLowerCase()}</a></li>)}<li><a href={`#${project.slug}-stack`}>stack</a></li><li><a href={`#${project.slug}-links`}>links</a></li></ol>
      </nav>

      <div className="case-body">
        {study.sections.map((section, index) => <section className="case-section" id={`${project.slug}-${section.id}`} key={section.id}>
          <h3><span>{roman[index]}</span>{section.label}</h3>
          {section.decision && <dl className="case-decision"><div><dt>chose</dt><dd>{section.decision.chose}</dd></div><div><dt>avoided</dt><dd><ul>{section.decision.rejected.map((item) => <li key={item}>{item}</li>)}</ul></dd></div></dl>}
          <p>{section.body}</p>
          {section.points && <ul className="case-points">{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
        </section>)}

        <section className="case-section" id={`${project.slug}-stack`}>
          <h3><span>V</span>Stack</h3>
          <ul className="stack-list">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>

        <section className="case-section case-links" id={`${project.slug}-links`}>
          <h3><span>VI</span>Links</h3>
          <a className="underlined-link" href={project.url} target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={18} /></a>
        </section>
      </div>
    </article>
  </dialog>
}
