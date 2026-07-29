import { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'

const base = import.meta.env.BASE_URL

const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Promesa', href: '#promesa' },
    { label: 'Problema', href: '#problema' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Paquetes', href: '#soluciones' },
    { label: 'Proceso xv', href: '#proceso' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
]

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const handleNavClick = (e: React.MouseEvent, href: string) => {
        e.preventDefault()
        const sectionId = href.replace('#', '')

        if (location.pathname !== '/') {
            navigate('/')
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
            }, 100)
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
        }
        setMenuOpen(false)
    }

    return (
        <header className="navbar">
        <div className="container navbar-inner">
            <Link className="navbar-brand" to="/" onClick={() => setMenuOpen(false)}>
            <img src= {`${base}images/cropped-Logo-Decimoquinta-1.png`} alt="Décimo Quinta" />
            </Link>

            <button
            className={`navbar-toggler ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
            >
            <span />
            <span />
            <span />
            </button>

            <nav className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
            <button
                className="navbar-close"
                onClick={() => setMenuOpen(false)}
                aria-label="Cerrar menú"
            >
                &times;
            </button>
            <ul className="navbar-nav">
                {navLinks.map((link) => (
                <li key={link.href}>
                    <a
                    className="nav-link"
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    >
                    {link.label}
                    </a>
                </li>
                ))}
            </ul>
            </nav>
        </div>
        </header>
    )
}

export default Navbar
