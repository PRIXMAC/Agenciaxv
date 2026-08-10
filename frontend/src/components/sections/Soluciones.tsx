// import { useState } from 'react'
import SectionTag from '../ui/SectionTag'
import BotonAgenda from '../ui/BotonAgenda'
// import ModalCorreo from '../ui/ModalCorreo'

const soluciones = [
    {
        title: 'pack black',
        desc: [
            'Plan básico de redes sociales (META).',
            'Reactivación de sitio web informativo.',
            'Actualizaciones mensuales.',
            'Campaña publicitaria para llevar tráfico al sitio web.',
            'Periodo de ejecución: 10 meses, con pago mensual.'
        ],
        className: 'solucion-card-uno',
    },
    {
        title: 'Paquete white',
        desc: [
            'Plan PRO de redes sociales (META).',
            'Reactivación de sitio web informativo.',
            'Actualizaciones mensuales.',
            'Campaña publicitaria para llevar tráfico al sitio web.',
            'Periodo de ejecución: 10 meses, con pago mensual'
        ],
        className: 'solucion-card-tres',
    },
    {
        title: 'Paquete gold',
        desc: [
            'Plan básico de redes sociales (META).',
            'Tienda online activa por 1 año.',
            'Actualizaciones mensuales.',
            'Campaña publicitaria para llevar tráfico a la tienda online',
            'Periodo de ejecución: 10 meses, con pago mensual '
        ],
        className: 'solucion-card-dos',
    },
]

function Soluciones() {
    // const [modalAbierto, setModalAbierto] = useState(false)

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
                                <h3>{s.title}</h3>
                                <ul className="solucion-lista">
                                    {s.desc.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="soluciones-accion">
                    <BotonAgenda className="btn-soluciones">
                        Agendar reunión
                    </BotonAgenda>
                </div>
            </div>

            {/*<ModalCorreo
                correo="agencia.decimoquinta@gmail.com"
                abierto={modalAbierto}
                onCerrar={() => setModalAbierto(false)}
            />*/}
        </section>
    )
}

export default Soluciones