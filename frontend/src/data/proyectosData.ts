const base = import.meta.env.BASE_URL;

export interface Proyecto {
    slug: string
    numero: string
    nombre: string
    logo: string
    tagline: string
    industria: string
    entrega: string
    resumenTitulo: string
    resumenTexto: string
    resumenImagen?: string
    aplicacionesImagen?: string
    aplicacionesTitulo?: string
    aplicacionesTexto?: string
    desafioTexto: string
    nombreTexto: string
    aplicaciones: {
        titulo: string
        texto: string
        color: 'amarillo' 
        imagen?: string
    }[]
}

export const proyectosData: Proyecto[] = [
    {
        slug: 'bioconcordia',
        numero: '01',
        nombre: 'BioConcordia',
        logo: `${base}images/logos_proyectos/bioconcordia-logo.jpg`,
        tagline: 'Proyecto de identidad visual',
        industria: 'Agricultura',
        entrega: 'Manual de marca + aplicaciones',
        resumenTitulo: 'UNA MARCA PARA UNA SOLUCIÓN CON VISIÓN SUSTENTABLE.',
        resumenTexto:
            'BioConcordia nació como respuesta a la necesidad de construir una marca potente y recordable para un producto agrícola innovador, capaz de ser reconocido en el rubro de los insumos agrícolas.',
        resumenImagen: `${base}images/imagenes_proyectos/Bioconcordia-1.webp`,
        desafioTexto:
            'Necesidad de estructurar la marca no solo para su comercialización agrícola, sino para cumplir con las estrictas exigencias legales de registro de propiedad intelectual.',
        nombreTexto:
            'Creación de naming, identidad visual, diseño de etiquetas, folletos informativos y el desarrollo del Manual Técnico de Normas.',
        aplicacionesImagen:`${base}images/imagenes_proyectos/Bioconcordia-2.webp`,
        aplicacionesTitulo: 'UNA IDENTIDAD PARA DISTINTOS SOPORTES.',
        aplicacionesTexto:
            'El sistema contempla aplicaciones en fondos, versiones cromáticas, mockups y piezas corporativas como la gigantografía, tarjeta de presentación, wallpaper y polera corporativa.',
        aplicaciones: [
            { titulo: 'LINEAMIENTOS DE IDENTIDAD VISUAL', texto: 'Normas de uso para proteger la identidad, sus colores, tipografías y aplicaciones.', imagen: `${base}images/BioConcordia.webp`, color: 'amarillo' },
        ],
    },
    {
        slug: 'sustancial',
        numero: '02',
        nombre: 'Sustancial',
        logo:  `${base}images/logos_proyectos/sustancial-logo.jpg` ,
        tagline: 'Proyecto de identidad visual',
        industria: 'Agricultura / Corporativo',
        entrega: 'Arquitectura de marca y branding',
        resumenTitulo: 'UN RESPALDO CORPORATIVO PARA LA INNOVACIÓN AGRÍCOLA.',
        resumenTexto:
            'Sustancial se consolida como una entidad matriz vinculada a la creación de bioinsumos para la agricultura sustentable. La marca fue construida para transmitir autoridad, responsabilidad ambiental y confianza institucional.',
        resumenImagen: `${base}images/imagenes_proyectos/Sustancial-1.webp`,
        desafioTexto:
            'Crear una marca paraguas capaz de respaldar de manera objetiva productos específicos de su portafolio, manteniendo una coherencia visual impecable y transmitiendo un enfoque tecnológico y sustentable.',
        
        nombreTexto:
            'Diseño de identidad corporativa, estructuración de arquitectura de marca y definición de lineamientos visuales estratégicos.',
        aplicacionesImagen:`${base}images/imagenes_proyectos/Sustancial-2.webp`,
        aplicacionesTitulo: 'COHERENCIA VISUAL PARA EL ECOSISTEMA DE PRODUCTOS.',
        aplicacionesTexto:
            'El desarrollo incluye aplicaciones en soportes corporativos, firmas digitales, documentación técnica y elementos de respaldo para sus productos derivados.',
        aplicaciones: [
            { titulo: 'LINEAMIENTOS DE IDENTIDAD VISUAL', texto: 'Parámetros estrictos que regulan la convivencia gráfica de la marca matriz con los distintos logotipos de los productos que respalda.', imagen: `${base}images/Sustancial.webp`, color: 'amarillo' },
        ],
    },
    {
        slug: 'all-in-pacha',
        numero: '03',
        nombre: 'All-in Pacha',
        logo: `${base}images/logos_proyectos/allinpacha-logo.jpg`,
        tagline: 'Proyecto de identidad visual',
        industria: 'Agricultura / Insumos',
        entrega: 'Manual de marca, packaging y material técnico',
        resumenTitulo: 'IDENTIDAD VISUAL PARA UN ACELERANTE AGRÍCOLA DE ALTO IMPACTO. ',
        resumenTexto:
            'All-in Pacha requirió el desarrollo de una identidad visual robusta orientada a destacar en el mercado de insumos, proyectando su carácter innovador y su base técnica orientada a la sustentabilidad.',
        resumenImagen: `${base}images/imagenes_proyectos/All-in-Pacha-1.webp`,
        desafioTexto:
            'Necesidad de estructurar una marca comercialmente competitiva y, de forma paralela, desarrollar herramientas técnicas de educación para el usuario final que cumplan con los estándares del sector.',
        nombreTexto:
            'Creación de identidad visual, diseño de packaging, diseño de folletería promocional de alto tiraje y desarrollo editorial del Manual de Compostaje.',
        aplicacionesImagen:`${base}images/imagenes_proyectos/All-in-Pacha-2.webp`,
        aplicacionesTitulo: 'ADAPTABILIDAD PARA EMPAQUES Y MATERIAL EDUCATIVO.',
        aplicacionesTexto:
            'El sistema gráfico se implementó en los envases finales del producto, material impreso promocional para exposición en ferias especializadas del rubro y documentos técnicos.',
        aplicaciones: [
            { titulo: 'LINEAMIENTOS DE IDENTIDAD VISUAL', texto: 'Normas de uso para proteger la identidad gráfica y asegurar la consistencia técnica en todas sus aplicaciones comerciales.', imagen: `${base}images/All-inPacha.webp`, color: 'amarillo' },
        ],
    },
    {
        slug: 'consorcio-del-desierto',
        numero: '04',
        nombre: 'Consorcio del Desierto',
        logo: `${base}images/logos_proyectos/consorciodeldesierto-logo.jpg`,
        tagline: 'Proyecto de Comunicación digital ',
        industria: 'Agricultura / Corporativo',
        entrega: 'Branding corporativo, manual de normas y RRSS',
        resumenTitulo: 'IDENTIDAD INSTITUCIONAL PARA EL DESARROLLO AGRÍCOLA REGIONAL.',
        resumenTexto:
            'El Consorcio del Desierto actúa como entidad articuladora de iniciativas sustentables. Su marca fue diseñada para reflejar solidez, liderazgo y un compromiso estructurado con el desarrollo agrícola.',
        resumenImagen: `${base}images/imagenes_proyectos/Consorcio-del-Desierto-1.webp`,
        desafioTexto:
            'Proyectar una imagen de alto estándar corporativo que facilite el relacionamiento estratégico, la articulación con gestores de cooperativas y la validación formal de proyectos en el sector.',
        nombreTexto:
            'Creación de identidad corporativa, desarrollo de aplicaciones institucionales y Manual Técnico de Normas.',
        aplicaciones: [
            { titulo: 'LINEAMIENTO DE IDENTIDAD VISUAL', texto: 'Directrices corporativas para mantener la formalidad, los colores institucionales y la correcta convivencia de la marca.', imagen: `${base}images/ConsorciodelDesierto.webp`, color: 'amarillo' },
        ],
    },
    {
        slug: 'tecno-ambiente',
        numero: '05',
        nombre: 'Tecno-Ambiente',
        logo: `${base}images/logos_proyectos/LOGO TECNO AMBIENTE.svg`,
        tagline: 'Proyecto digital y visual',
        industria: 'Consultoría Ambiental / Sustentabilidad',
        entrega: 'Actualización web y soportes físicos',
        resumenTitulo: 'UNA PLATAFORMA PARA SOLUCIONES CON VISIÓN SOSTENIBLE.',
        resumenTexto:
            ' La actualización visual de TecnoAmbiente surgió como respuesta a la necesidad de construir una presencia digital sólida y estructurada, capaz de reflejar sus 20 años de experiencia técnica en el rubro de la consultoría de gestión ambiental.',
        desafioTexto:
            'Estructurar una plataforma digital capaz de comunicar la trayectoria y el rigor de la consultora, desarrollando también soportes presenciales que consoliden su autoridad institucional en instancias B2B y relatorías.',
        nombreTexto:
            ' Arquitectura de la información y Diseño UX/UI, desarrollo de sitio web corporativo y diseño de soporte físico (Pendones institucionales).',
        aplicacionesImagen:`${base}images/imagenes_proyectos/Tecno-Ambiente-1.webp`,
        aplicacionesTitulo: 'PROYECCIÓN VISUAL: DEL ENTORNO WEB A LA CONSULTORIA PRESENCIAL.',
        aplicacionesTexto:
            'El rediseño se integró en la nueva interfaz del sitio web para mejorar la experiencia de navegación del usuario, y se adaptó a formatos de exhibición física (pendón) para asegurar la legibilidad y presencia de la marca en eventos presenciales.',
        aplicaciones: [
            { titulo: 'SISTEMA VISUAL', texto: 'Estandarización de los elementos gráficos aplicados tanto a la plataforma digital como a los soportes físicos, asegurando consistencia en la comunicación de la empresa.', color: 'amarillo' },
        ],
    },
    {
        slug: 'proyecto-06',
        numero: '06',
        nombre: 'Manual de Compostaje para las zonas áridas de Chile ',
        logo: `${base}images/imagenes_proyectos/image.webp`,
        tagline: 'Proyecto de identidad visual',
        industria: 'Agricultura',
        entrega: ' Diseño editorial ',
        resumenTitulo: ' DISEÑO EDITORIAL PARA LA TRANSFERENCIA DE CONOCIMIENTO AGRÍCOLA.',
        resumenTexto:
            ' El proyecto consistió en la estructuración visual y diagramación de un manual especializado en procesos de compostaje adaptados a las condiciones climáticas de la región, específicamente, en las zonas áridas del norte de Chile. El objetivo central fue facilitar la lectura y aplicación de procedimientos técnicos en terreno.',
        desafioTexto:
            ' Jerarquizar y organizar información técnica, métricas y metodologías agronómicas en un formato visualmente claro para el público del sector agrícola. Requirió equilibrar el rigor científico del contenido con una diseño de lectura que resultara funcional y accesible para el usuario final.',
        nombreTexto:
            ' Diseño editorial, edición de imágenes, diagramación de tablas de datos y estructuración visual para formatos para su distribución física y digital.',
        aplicacionesImagen:`${base}images/imagenes_proyectos/Consorcio-del-Desierto-3.webp`,
        aplicacionesTitulo: ' ESTRUCTURA VISUAL AL SERVICIO DE LA INFORMACIÓN TÉCNICA.',
        aplicacionesTexto:
            'El desarrollo editorial se estructuró para facilitar la lectura de contenidos científicos y metodológicos, abarcando módulos complejos sobre los desafíos ambientales en zonas hiper-áridas, el manejo de pilas y la calidad del producto final. La diagramación integra estratégicamente esquemas del proceso, tablas de parámetros de control y registro fotográfico de terreno, asegurando que la información sea de rápida consulta para el usuario. ',
        aplicaciones: [
            { titulo: 'SISTEMA EDITORIAL', texto: 'Definición de la grilla de diagramación, tipografías, iconografía y uso de espacios aplicados a lo largo de las 38 páginas del documento, garantizando la consistencia gráfica, el descanso visual y la protección de los derechos de la obra. ',  color: 'amarillo' },
        ],
    },
    {
        slug: 'proyecto-07',
        numero: '07',
        nombre: 'PROYECTO ',
        logo: `${base}images/proyecto07-logo.jpg`,
        tagline: 'Proyecto de identidad visual',
        industria: 'Lorem ipsum',
        entrega: 'Manual de marca + aplicaciones',
        resumenTitulo: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING',
        resumenTexto:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        resumenImagen: `${base}images/allinpacha-mockup.png`,
        desafioTexto:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        nombreTexto:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        aplicacionesTitulo: 'UNA IDENTIDAD PARA DISTINTOS SOPORTES.',
        aplicacionesTexto:
            'El sistema contempla aplicaciones en fondos, versiones cromáticas, mockups y piezas corporativas como la gigantografía, tarjeta de presentación, wallpaper y polera corporativa.',
        aplicaciones: [
            { titulo: 'MANUAL DE MARCA', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', imagen: `${base}images/imagenes_hero_servicios/aplicacion-amarilla.jpg`, color: 'amarillo' },
        ],
    },
    {
        slug: 'proyecto-08',
        numero: '08',
        nombre: 'PROYECTO',
        logo: `${base}images/proyecto08-logo.jpg`,
        tagline: 'Proyecto de identidad visual',
        industria: 'Lorem ipsum',
        entrega: 'Manual de marca + aplicaciones',
        resumenTitulo: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING',
        resumenTexto:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        resumenImagen: `${base}images/allinpacha-mockup.png`,
        desafioTexto:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        nombreTexto:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        aplicacionesTitulo: 'UNA IDENTIDAD PARA DISTINTOS SOPORTES.',
        aplicacionesTexto:
            'El sistema contempla aplicaciones en fondos, versiones cromáticas, mockups y piezas corporativas como la gigantografía, tarjeta de presentación, wallpaper y polera corporativa.',
        aplicaciones: [
            { titulo: 'LOREM IPSUM', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', imagen: `${base}images/imagenes_hero_servicios/aplicacion-amarilla.jpg`, color: 'amarillo' },
        ],
    },
]

function esTexto(v: unknown): v is string {
    return typeof v === 'string' && v.trim().length > 0
}

function validarProyectos(datos: Proyecto[]): void {
    const campos: (keyof Proyecto)[] = [
        'slug', 'numero', 'nombre', 'logo', 'tagline', 'industria', 'entrega',
        'resumenTitulo', 'resumenTexto',
        'desafioTexto', 'nombreTexto',
    ]

    for (const proyecto of datos) {
        const slug = typeof proyecto.slug === 'string' ? proyecto.slug : 'desconocido'

        for (const campo of campos) {
            if (!esTexto(proyecto[campo])) {
                throw new Error(`proyectosData alterado: campo "${campo}" inválido en proyecto "${slug}"`)
            }
        }

        if (!Array.isArray(proyecto.aplicaciones) || proyecto.aplicaciones.length === 0) {
            throw new Error(`proyectosData alterado: proyecto "${slug}" sin aplicaciones válidas`)
        }

        for (const app of proyecto.aplicaciones) {
            if (
                !esTexto(app.titulo) ||
                !esTexto(app.texto) ||
                app.color !== 'amarillo'
            ) {
                throw new Error(`proyectosData alterado: aplicación inválida en proyecto "${slug}"`)
            }
        }
    }
}

function congelarProyectos(datos: Proyecto[]): void {
    for (const proyecto of datos) {
        Object.freeze(proyecto)
        proyecto.aplicaciones.forEach((app) => Object.freeze(app))
    }
}

validarProyectos(proyectosData)
congelarProyectos(proyectosData)