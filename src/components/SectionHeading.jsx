export default function SectionHeading({ index, label, children }) {
  return <div className="chapter-heading" data-reveal><p className="chapter-label"><span>CHAPTER {index}</span><span>{label}</span></p><h2>{children}</h2></div>
}
