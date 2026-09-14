import { ArrowUpRight } from 'lucide-react'
import ProjectVisual from './ProjectVisual'

export default function ProjectCard({ project, onOpen }) {
  return <article className="project-spread" aria-labelledby={`title-${project.slug}`}>
    <ProjectVisual project={project} />
    <div className="project-copy">
      <p className="project-kicker"><span>SELECTED WORK / {project.number}</span><span>2026</span></p>
      <div><p className="project-category">{project.subtitle}</p><h3 id={`title-${project.slug}`}>{project.name}</h3><p className="project-description">{project.description}</p><ul className="project-highlights">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul></div>
      <div className="project-bottom"><p className="project-stack">{project.stack.join(' / ')}</p><div className="project-links"><button onClick={() => onOpen(project)} className="underlined-link">View project <ArrowUpRight size={18} /></button><a href={project.url} target="_blank" rel="noreferrer" className="underlined-link">GitHub <ArrowUpRight size={18} /></a></div></div>
    </div>
  </article>
}
