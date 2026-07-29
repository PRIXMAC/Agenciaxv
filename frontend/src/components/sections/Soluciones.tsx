import SectionTag from '../ui/SectionTag'

const soluciones = [
    {
        num: '01',
        title: 'Paquete básico',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequatur fugiat eaque.',
        className: 'solucion-card-uno',
    },
    {
        num: '02',
        title: 'Paquete FULL',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequatur fugiat eaque.',
        className: 'solucion-card-tres',
    },
    {
        num: '03',
        title: 'Paquete PREMIUM',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequatur fugiat eaque.',
        className: 'solucion-card-dos',
    },
]

function Soluciones() {
    return (
        <section id="soluciones" className="soluciones">
            <div className="container">
                <div className="soluciones-encabezado">
                    <SectionTag>PAQUETES</SectionTag>
                    <h2 className="soluciones-title">SOLUCIONES</h2>
                    <p className="soluciones-intro">
                        Desde el lanzamiento de una identidad visual sólida hasta una renovación
                        estratégica completa para empresas en expansión.
                    </p>
                </div>

                <div className="soluciones-layout">
                    {soluciones.map((s, i) => (
                        <article key={i} className={`solucion-card ${s.className}`}>
                            <div className="solucion-contenido">
                                <span className="solucion-numero">{s.num}</span>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="soluciones-accion">
                    <a href="#contacto" className="btn-soluciones">
                        Consultar
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Soluciones
