import { useState } from 'react'
import SectionTag from '../ui/SectionTag'

const proyectos = [
    { num: '01', color: 'amarillo', title: 'LOREM IPSUM', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: `${import.meta.env.BASE_URL}images/proyecto-01.jpg` },
    { num: '02', color: 'naranjo', title: 'LOREM IPSUM', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: `${import.meta.env.BASE_URL}images/proyecto-01.jpg` },
    { num: '03', color: 'amarillo', title: 'LOREM IPSUM', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: `${import.meta.env.BASE_URL}images/proyecto-01.jpg` },
    { num: '04', color: 'naranjo', title: 'LOREM IPSUM', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: `${import.meta.env.BASE_URL}images/proyecto-01.jpg` },
    { num: '05', color: 'naranjo', title: 'LOREM IPSUM', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: `${import.meta.env.BASE_URL}images/proyecto-01.jpg` },
    { num: '06', color: 'amarillo', title: 'LOREM IPSUM', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: `${import.meta.env.BASE_URL}images/proyecto-01.jpg` },
    { num: '07', color: 'naranjo', title: 'LOREM IPSUM', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: `${import.meta.env.BASE_URL}images/proyecto-01.jpg` },
    { num: '08', color: 'amarillo', title: 'LOREM IPSUM', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', img: `${import.meta.env.BASE_URL}images/proyecto-01.jpg` },
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
                        <article
                            key={p.num}
                            className={`proyecto-item ${active === p.num ? 'proyecto-active' : ''}`}
                            onClick={() => setActive(active === p.num ? null : p.num)}
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
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Proyectos
