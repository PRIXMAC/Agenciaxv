import { useState } from 'react'

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

    return (
        <header className="navbar">
        <div className="container navbar-inner">
            <a className="navbar-brand" href="#inicio">
            <img src={`${import.meta.env.BASE_URL}images/cropped-Logo-Decimoquinta-1.png`} alt="Décimo Quinta" />
            </a>

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
                    onClick={() => setMenuOpen(false)}
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
