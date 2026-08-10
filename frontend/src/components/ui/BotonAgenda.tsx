interface BotonAgendaProps {
    children: React.ReactNode
    className?: string
}

function BotonAgenda({
    children,
    className = '',
}: BotonAgendaProps) {

    const CALENDAR_URL = 'https://calendar.app.google/mAPov1giCPs3mcVV6'

    return (
        <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
        >
            {children}
        </a>
    )
}

export default BotonAgenda