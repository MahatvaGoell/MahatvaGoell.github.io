import { useEffect, useRef } from 'react'
import { ArrowUpRight, X } from 'lucide-react'

export default function ProjectDetail({ project, onClose }) {
  const dialog = useRef(null)
  useEffect(() => {
    const node = dialog.current
    const previousFocus = document.activeElement
    node.showModal()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { node.close(); document.body.style.overflow = previousOverflow; previousFocus?.focus({ preventScroll: true }) }
  }, [])
  return <dialog className="project-dialog" ref={dialog} onCancel={(event) => { event.preventDefault(); onClose() }} onClick={(event) => { if (event.target === dialog.current) onClose() }} aria-labelledby="project-dialog-title" data-lenis-prevent>
    <div className="dialog-inner"><button className="dialog-close" onClick={onClose} aria-label="Close project details" autoFocus><X /></button><p className="eyebrow">PROJECT {project.number} / {project.inProgress ? 'IN PROGRESS' : 'ENGINEERING NOTES'}</p><h2 id="project-dialog-title">{project.name}</h2><p className="dialog-description">{project.description}</p><h3>Inside the project</h3><ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul><p>{project.details}</p><p className="project-stack">{project.stack.join(' / ')}</p><a className="underlined-link" href={project.url} target="_blank" rel="noreferrer">Explore the repository <ArrowUpRight size={18} /></a></div>
  </dialog>
}
