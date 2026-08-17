import SectionTag from '../ui/SectionTag'

const base = import.meta.env.BASE_URL;

const pasos = [
    { num: '01', title: 'Diagnóstico', desc: 'Estudiamos a fondo tu marca, tu mercado y los objetivos que deseas alcanzar. Identificamos qué funciona y qué se puede mejorar, construyendo una base sólida antes de iniciar cualquier desarrollo.', dot: 'orange', img: `${base}images/procesos/Diagnostico.webp` },
    { num: '02', title: 'Estrategia', desc: 'Trazamos un plan de acción claro y a la medida de tu proyecto. Definimos los pasos y las herramientas necesarias para que el diseño y la comunicación visual respondan directamente a las metas de tu negocio', dot: 'yellow', img: `${base}images/procesos/Estrategia.webp` },
    { num: '03', title: 'Diseño', desc: 'Damos forma a las ideas creando elementos visuales de alto estándar. Desarrollamos tu identidad gráfica, sitio web y material para redes sociales, cuidando cada detalle para proyectar una imagen impecable.', dot: 'orange', img: `${base}images/procesos/Diseno.webp` },
    { num: '04', title: 'Implementación', desc: 'Ponemos el proyecto en marcha asegurando que todo funcione a la perfección. Entregamos los diseños, plataformas y recursos listos para que tu marca comience a destacar en su sector', dot: 'yellow', img: `${base}images/procesos/Implementacion.webp` },
]

function Proceso() {
    return (
        <section id="proceso" className="proceso">
            <div className="container">
                <div className="proceso-header">
                    <SectionTag>CÓMO TRABAJAMOS</SectionTag>
                    <h2 className="proceso-title">
                        UN PROCESO
                        <br />
                        CREATIVO DISEÑADO
                        <br />
                        PARA CONSTRUIR
                    </h2>
                    <p className="proceso-text">
                        Desde el diagn&oacute;stico hasta la implementaci&oacute;n, cada etapa está
                        pensada para transformar ideas en algo sólido y funcional.
                    </p>
                </div>

                <div className="timeline">
                    <div className="timeline-grid">
                        {pasos.map((paso) => (
                            <div key={paso.num} className="timeline-item">
                                <div className="timeline-image">
                                    <img src={paso.img} alt={paso.title} />
                                </div>
                                <span className={`dot ${paso.dot}`} />
                                <div className="timeline-card">
                                    <div className="timeline-card-body">
                                        <small>{paso.num}</small>
                                        <h4>{paso.title}</h4>
                                        <p>{paso.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proceso
