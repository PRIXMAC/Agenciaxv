import { useState } from 'react'
import SectionTag from '../ui/SectionTag'
import ModalCorreo from '../ui/ModalCorreo'

const soluciones = [
    {
        title: 'Paquete básico',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequatur fugiat eaque.',
        className: 'solucion-card-uno',
    },
    {
        title: 'Paquete FULL',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequatur fugiat eaque.',
        className: 'solucion-card-tres',
    },
    {
        title: 'Paquete PREMIUM',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequatur fugiat eaque.',
        className: 'solucion-card-dos',
    },
]

function Soluciones() {
    const [modalAbierto, setModalAbierto] = useState(false)

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
                                <p>{s.desc}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="soluciones-accion">
                    <button
                        type="button"
                        className="btn-soluciones"
                        onClick={() => setModalAbierto(true)}
                    >
                        Consultar
                    </button>
                </div>
            </div>

            <ModalCorreo
                correo="agencia.decimoquinta@gmail.com"
                abierto={modalAbierto}
                onCerrar={() => setModalAbierto(false)}
            />
        </section>
    )
}

export default Soluciones
