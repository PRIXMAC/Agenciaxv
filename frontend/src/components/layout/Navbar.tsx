import { useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'

const base = import.meta.env.BASE_URL

type NavLink =
    | { label: string; href: string }
    | { label: string; to: string; section?: string }

const navLinksHome: NavLink[] = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Promesa', href: '#promesa' },
    { label: 'Problema', href: '#problema' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Paquetes', href: '#soluciones' },
    { label: 'Proceso XV', href: '#proceso' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
]

const navLinksProyecto: NavLink[] = [
    { label: 'Inicio', to: '/' },
    { label: 'Proyectos', to: '/', section: 'proyectos' },
    { label: 'Contexto', href: '#contexto' },
    { label: 'Identidad', href: '#identidad' },
    { label: 'Sistema', href: '#sistema' },
    { label: 'Aplicaciones', href: '#aplicaciones' },
]

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const esProyectoDetalle = location.pathname.startsWith('/proyectos/')

    const navLinks = esProyectoDetalle
        ? navLinksProyecto
        : navLinksHome

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault()

        const sectionId = href.replace('#', '')
        const elemento = document.getElementById(sectionId)

        if (elemento) {
            elemento.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }

        setMenuOpen(false)
    }

    const handleSectionNav = (to: string, section: string) => {
        if (location.pathname === to) {
            document.getElementById(section)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
            return
        }

        navigate(to)
        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                document.getElementById(section)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
            })
        })
    }

    return (
        <header className="navbar">
            <div className="container navbar-inner">
                <Link
                    className="navbar-brand"
                    to="/"
                    onClick={() => setMenuOpen(false)}
                >
                    <img
                        src={`${base}images/cropped-Logo-Decimoquinta-1.png`}
                        alt="Décimo Quinta"
                    />
                </Link>

                <button
                    className={`navbar-toggler ${
                        menuOpen ? 'active' : ''
                    }`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menú"
                >
                    <span />
                    <span />
                    <span />
                </button>

                <nav
                    className={`navbar-menu ${
                        menuOpen ? 'open' : ''
                    }`}
                >
                    <button
                        className="navbar-close"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Cerrar menú"
                    >
                        &times;
                    </button>

                    <ul className="navbar-nav">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                {'to' in link ? (
                                    <Link
                                        className="nav-link"
                                        to={link.to}
                                        onClick={(e) => {
                                            if (link.section) {
                                                e.preventDefault()
                                                handleSectionNav(link.to, link.section)
                                            }
                                            setMenuOpen(false)
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                ) : (
                                    <a
                                        className="nav-link"
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                    >
                                        {link.label}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar