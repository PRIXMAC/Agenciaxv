import SectionTag from '../ui/SectionTag'

const pasos = [
    { num: '01', title: 'Diagnóstico', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequatur fugiat eaque.', dot: 'orange', img: `${import.meta.env.BASE_URL}images/proceso-01.jpg` },
    { num: '02', title: 'Estrategia', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequatur fugiat eaque.', dot: 'yellow', img: `${import.meta.env.BASE_URL}images/proceso-01.jpg` },
    { num: '03', title: 'Diseño', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequatur fugiat eaque.', dot: 'orange', img: `${import.meta.env.BASE_URL}images/proceso-01.jpg` },
    { num: '04', title: 'Implementación', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequatur fugiat eaque.', dot: 'yellow', img: `${import.meta.env.BASE_URL}images/proceso-01.jpg` },
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
