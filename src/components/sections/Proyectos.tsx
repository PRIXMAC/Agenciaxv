import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionTag from '../ui/SectionTag'

const proyectos = [
    { num: '01', slug: 'bioconcordia', color: 'amarillo', title: 'BIOCONCORDIA', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: `${import.meta.env.BASE_URL}images/bioconcordia-logo.jpg` },
    { num: '02', slug: 'sustancial', color: 'naranjo', title: 'SUSTANCIAL', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: `${import.meta.env.BASE_URL}images/sustancial-logo.jpg` },
    { num: '03', slug: 'all-in-pacha', color: 'amarillo', title: 'ALL-IN PACHA', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: `${import.meta.env.BASE_URL}images/allinpacha-logo.jpg` },
    { num: '04', slug: 'consorcio-del-desierto', color: 'naranjo', title: 'CONSORCIO DEL DESIERTO', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: `${import.meta.env.BASE_URL}images/consorciodeldesierto-logo.jpg` },
    { num: '05', slug: 'proyecto-05', color: 'naranjo', title: 'PROYECTO-05', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: `${import.meta.env.BASE_URL}images/proyecto-01.jpg` },
    { num: '06', slug: 'proyecto-06', color: 'amarillo', title: 'PROYECTO-06', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: `${import.meta.env.BASE_URL}images/proyecto-01.jpg` },
    { num: '07', slug: 'proyecto-07', color: 'naranjo', title: 'PROYECTO-07', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: `${import.meta.env.BASE_URL}images/proyecto-01.jpg` },
    { num: '08', slug: 'proyecto-08', color: 'amarillo', title: 'PROYECTO-08', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: `${import.meta.env.BASE_URL}images/proyecto-01.jpg` },
]

function Proyectos() {
    const [active, setActive] = useState<string | null>(null)

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

                <div className="proyectos-grid">
                    {proyectos.map((p) => (
                        <Link
                            key={p.num}
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
