import {useParams, Link } from 'react-router-dom'
import { proyectosData } from '../data/proyectosData'

function ProyectoDetalle(){
    const{ slug } = useParams()
    const proyecto = proyectosData.find((p)=> p.slug === slug)

    if (!proyecto) {
        return (
            <section className="proyecto-detalle-vacio">
                <h2>Proyecto no encontrado</h2>
                <Link to="/">Volver al inicio</Link>
            </section>
        )
    }


    return (
        <section className="proyecto-detalle">
            <div className="pd-hero container">
                <span className="pd-tagline">{proyecto.tagline}</span>
                <img className="pd-logo" src={proyecto.logo} alt={proyecto.nombre}/>

                <div className="pd-meta">
                    <span className="pd-meta-item">
                        PROYECTO: <strong>{proyecto.nombre}</strong>
                    </span>
                    <span className="pd-meta-item">
                        INDUSTRIA: <strong>{proyecto.industria}</strong>
                    </span>
                    <span className="pd-meta-item">
                        ENTREGA: <strong>{proyecto.entrega}</strong>
                    </span>
                </div>
            </div>

            <div className="pd-resumen">
                <div className="container pd-resumen-grid">
                    <div className="pd-resumen-texto">
                        <span className="section-tag">RESUMEN</span>
                        <h2>{proyecto.resumenTitulo}</h2>
                        <p>{proyecto.resumenTexto}</p>
                    </div>
                    <div className="pd-resumen-imagen">
                        {proyecto.resumenImagen && (
                            <img src={proyecto.resumenImagen} alt={'Mockup ${proyecto.nombre}'}/>
                        )}
                    </div>
                </div>
            </div>

            <div className="pd-detalles">
                <div className="container pd-detales-grid">
                    <div className="pd-detalle-card">
                        <h3>EL DESAFÍO</h3>
                        <p>{proyecto.desafioTexto}</p>
                    </div>
                    <div className="pd-detalle-card">
                        <h3>{proyecto.nombreTitulo}</h3>
                        <p>{proyecto.nombreTexto}</p>
                    </div>
                </div>
            </div>

            <div className="pd-aplicaciones container">
                <span className="section-tag">APLICACIONES</span>
                <h2>UNA IDENTIDAD PARA DISTINTOS SOPORTES.</h2>
                <p>
                    El sistema contempla aplicaciones en fondos, versiones cromáticas, mockups y
                    piezas corporativas como la gigantografía, tarjeta de presentación, wallpaper y
                    polera corporativa.
                </p>

                {proyecto.aplicaciones.map((app, i) => (
                    <div key={i} className="pd-aplicacion-bloque">
                        <></>
                        <></>
                        <div>
                            {app.imagen ? (
                                <img src={app.imagen} alt={app.titulo} />
                            ) : (
                                <span className="pd-caja-placeholder" aria-hidden="true" />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}


export default ProyectoDetalle