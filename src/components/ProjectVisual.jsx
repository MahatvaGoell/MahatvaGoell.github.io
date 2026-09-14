import { ArrowRight, Fingerprint, ScanLine } from 'lucide-react'

function AuditDiagram() {
  return <div className="audit-diagram">
    <div className="visual-caption"><span>SENTINELS / SYSTEM MAP</span><span>01—05</span></div>
    <div className="audit-core"><Fingerprint strokeWidth={0.65} /><span>Observe.<br /><em>Understand.</em></span></div>
    <div className="agent-pipeline">{['Headers', 'Recon', 'TLS', 'Exposure', 'DNS'].map((agent) => <span key={agent}>{agent}</span>)}</div>
    <div className="diagram-flow"><span>Passive inspection</span><ArrowRight size={16} /><span>Deterministic score</span></div>
    <p className="visual-footnote">CONCEPT DIAGRAM · SCREENSHOT FORTHCOMING</p>
  </div>
}

function GaitDiagram() {
  return <div className="gait-diagram">
    <div className="visual-caption"><span>GAIT ANALYSIS / SIGNAL STUDY</span><span>FMG + INSOLE</span></div>
    <div className="signal-title">Finding rhythm<br /><em>in movement.</em></div>
    <svg viewBox="0 0 640 250" role="img" aria-label="Illustrative signal curves, not measured research data">
      <defs><pattern id="signal-grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="currentColor" strokeOpacity=".16" /></pattern></defs>
      <rect width="640" height="250" fill="url(#signal-grid)" />
      <path className="signal-main" d="M0 130 Q25 130 38 115 T70 150 T108 70 T145 115 T185 90 T222 166 T260 130 T298 70 T335 115 T374 90 T413 167 T451 130 T489 70 T526 115 T565 90 T604 165 T640 120" />
      <path className="signal-secondary" d="M0 200 Q40 200 70 180 T120 210 T180 175 T235 195 T290 177 T348 213 T405 180 T464 194 T518 177 T580 207 T640 183" />
      {[128, 256, 384, 512].map((x) => <line key={x} x1={x} x2={x} y1="20" y2="230" className="signal-marker" />)}
    </svg>
    <div className="gait-phases"><span>QS</span><span>GI</span><span>SSSW</span><span>SLT</span><span>SSLW</span><span>GT</span></div>
    <p className="visual-footnote">ILLUSTRATIVE SIGNALS · RESEARCH VISUAL FORTHCOMING</p>
  </div>
}

export default function ProjectVisual({ project }) {
  return <div className={`project-visual ${project.slug}`}>
    {project.slug === 'sentinels' ? <AuditDiagram /> : project.slug === 'gait' ? <GaitDiagram /> : <div className="pending-diagram">
      <div className="visual-caption"><span>PROJECT / 03</span><span>IN PROGRESS</span></div><ScanLine strokeWidth={0.6} className="pending-icon" /><div className="pending-title">A study<br /><em>in progress.</em></div><p className="visual-footnote">PNEUMONIA DETECTION · DOCUMENTATION FORTHCOMING</p>
    </div>}
  </div>
}
