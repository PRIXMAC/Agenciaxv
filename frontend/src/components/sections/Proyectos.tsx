import { useState, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import SectionTag from '../ui/SectionTag'
import { proyectosData } from '../../data/proyectosData'

const proyectos = proyectosData.slice(0, 8).map((p) => ({
    num: p.numero,
    slug: p.slug,
    color: parseInt(p.numero) % 2 === 0 ? 'naranjo' : 'amarillo' as const,
    title: p.nombre,
    desc: p.tagline,
    img: p.logo,
}))

function Proyectos() {
    const [active, setActive] = useState<string | null>(null)
    const gridRef = useRef<HTMLDivElement>(null)

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        const touch = e.touches[0]
        const el = document.elementFromPoint(touch.clientX, touch.clientY)
        const card = el?.closest('.proyecto-item') as HTMLElement | null
        if (card) {
            const num = card.getAttribute('data-num')
            if (num) setActive(num)
        }
    }, [])

    const handleTouchEnd = useCallback(() => {
        setActive(null)
    }, [])

    return (
        <section id="proyectos" className="proyectos">
            <div className="container">
                <div className="proyectos-encabezado">
                    <SectionTag>PORTAFOLIO</SectionTag>
                    <h2 className="proyectos-title">PROYECTOS</h2>
                    <p className="proyectos-intro">
                        Conoce algunos de nuestros trabajos de branding, diseño web
                        y comunicación visual desarrollados para marcas que buscan destacar.
                    </p>
                </div>

                <div
                    className="proyectos-grid"
                    ref={gridRef}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {proyectos.map((p) => (
                        <Link
                            key={p.num}
                            data-num={p.num}
                            to={`/proyectos/${p.slug}`}
                            className={`proyecto-item ${active === p.num ? 'proyecto-active' : ''}`}
                            onMouseEnter={() => setActive(p.num)}
                            onMouseLeave={() => setActive(null)}
                            >
                            <div className="proyecto-bg">
                                <img src={p.img} alt={p.title} />
                            </div>
                            <div className="proyecto-overlay" />
                            <span className={`proyecto-numero numero-${p.color}`}>{p.num}</span>
                            <div className="proyecto-contenido">
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Proyectos
