import {useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { proyectosData } from '../data/proyectosData'

function ProyectoDetalle(){
    const{ slug } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [slug])
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
            <div  id= "contexto" className="pd-hero container">
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

            <div id="identidad" className="pd-resumen">
                <div className="container pd-resumen-grid">
                    <div className="pd-resumen-texto">
                        <span className="section-tag-proyecto">RESUMEN</span>
                        <h2>{proyecto.resumenTitulo}</h2>
                        <p>{proyecto.resumenTexto}</p>
                    </div>
                    <div className={`pd-resumen-imagen${proyecto.slug === 'sustancial' ? ' pd-resumen-imagen--sustancial' : ''}`}>
                        {proyecto.resumenImagen && (
                            <img src={proyecto.resumenImagen} alt={`Mockup ${proyecto.nombre}`}/>
                        )}
                    </div>
                </div>
            </div>

            <div id= "sistema" className="pd-detalles">
                <div className="container pd-detalles-grid">
                    <article className="pd-detalle-card">
                        <h3>DESAFÍO</h3>
                        <p>{proyecto.desafioTexto}</p>
                    </article>

                    <article className="pd-detalle-card">
                        <h3>SERVICIOS ENTREGADOS</h3>
                        <p>{proyecto.nombreTexto}</p>
                    </article>
                </div>
            </div>

            <div id="aplicaciones" className="pd-aplicaciones container">
                <div className="pd-aplicaciones-header">
                    <div className="pd-aplicaciones-texto">
                        <span className="section-tag-proyecto">APLICACIONES</span>
                        <h2>UNA IDENTIDAD PARA 
                            <br />
                            DISTINTOS SOPORTES.</h2>
                        <p>
                            El sistema contempla aplicaciones en fondos, versiones cromáticas, mockups y
                            piezas corporativas como la gigantografía, tarjeta de presentación, wallpaper y
                            polera corporativa.
                        </p>
                    </div>
                    <div className="pd-aplicaciones-imagen">
                        <img src={proyecto.aplicacionesImagen ?? proyecto.resumenImagen} alt={`Mockup ${proyecto.nombre}`} />
                    </div>
                </div>

                {proyecto.aplicaciones.filter((app) => app.color === 'amarillo').map((app, i) => (
                    <div key={i} className="pd-aplicacion-bloque">
                        <h4>{app.titulo}</h4>
                        <p>{app.texto}</p>
                        <div className={`pd-aplicacion-caja pd-caja-${app.color}`}>
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