import './SectionTag.css'

interface SectionTagProps {
    children: React.ReactNode
}

function SectionTag({ children }: SectionTagProps) {
    return <span className="section-tag">{children}</span>
}

export default SectionTag
