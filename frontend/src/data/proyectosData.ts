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
    resumenImagen: string
    aplicacionesImagen?: string
    aplicacionesTitulo: string
    aplicacionesTexto: string
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
        logo: `${base}images/bioconcordia-logo.jpg`,
        tagline: 'Proyecto de identidad visual',
        industria: 'Agricultura',
        entrega: 'Manual de marca + aplicaciones',
        resumenTitulo: 'UNA MARCA PARA UNA SOLUCIÓN CON VISIÓN SUSTENTABLE.',
        resumenTexto:
            'BioConcordia nació como respuesta a la necesidad de construir una marca potente y recordable para un producto agrícola innovador, capaz de ser reconocido en el rubro de los insumos agrícolas.',
        resumenImagen: `${base}images/Bioconcordia 1.jpg`,
        desafioTexto:
            'Necesidad de estructurar la marca no solo para su comercialización agrícola, sino para cumplir con las estrictas exigencias legales de registro de propiedad intelectual.',
        nombreTexto:
            'Creación de naming, identidad visual, diseño de etiquetas, folletos informativos y el desarrollo del Manual Técnico de Normas.',
        aplicacionesImagen:`${base}images/Bioconcordia-2.jpg`,
        aplicacionesTitulo: 'UNA IDENTIDAD PARA DISTINTOS SOPORTES.',
        aplicacionesTexto:
            'El sistema contempla aplicaciones en fondos, versiones cromáticas, mockups y piezas corporativas como la gigantografía, tarjeta de presentación, wallpaper y polera corporativa.',
        aplicaciones: [
            { titulo: 'LINEAMIENTOS DE IDENTIDAD VISUAL', texto: 'Normas de uso para proteger la identidad, sus colores, tipografías y aplicaciones.', imagen: `${base}images/BioConcordia.jpg`, color: 'amarillo' },
        ],
    },
    {
        slug: 'sustancial',
        numero: '02',
        nombre: 'Sustancial',
        logo:  `${base}images/sustancial-logo.jpg` ,
        tagline: 'Proyecto de identidad visual',
        industria: 'Agricultura / Corporativo',
        entrega: 'Arquitectura de marca y branding',
        resumenTitulo: 'UN RESPALDO CORPORATIVO PARA LA INNOVACIÓN EN EL AGRO.',
        resumenTexto:
            'Sustancial se consolida como una entidad matriz vinculada a proyectos de innovación. La marca fue construida para transmitir autoridad, responsabilidad ambiental y confianza institucional.',
        resumenImagen: `${base}images/Sustancial-1.jpg`,
        desafioTexto:
            'Crear una marca paraguas capaz de respaldar de manera objetiva productos específicos de su portafolio, manteniendo una coherencia visual impecable y transmitiendo un enfoque tecnológico y sustentable.',
        
        nombreTexto:
            'Diseño de identidad corporativa, estructuración de arquitectura de marca y definición de lineamientos visuales estratégicos.',
        aplicacionesImagen:`${base}images/Sustancial-2.jpg`,
        aplicacionesTitulo: 'COHERENCIA VISUAL PARA EL ECOSISTEMA DE PRODUCTOS.',
        aplicacionesTexto:
            'El desarrollo incluye aplicaciones en soportes corporativos, firmas digitales, documentación técnica y elementos de respaldo para sus productos derivados.',
        aplicaciones: [
            { titulo: 'LINEAMIENTOS DE IDENTIDAD VISUAL', texto: 'Parámetros estrictos que regulan la convivencia gráfica de la marca matriz con los distintos logotipos de los productos que respalda.', imagen: `${base}images/Sustancial.jpg`, color: 'amarillo' },
        ],
    },
    {
        slug: 'all-in-pacha',
        numero: '03',
        nombre: 'All-in Pacha',
        logo: `${base}images/allinpacha-logo.jpg`,
        tagline: 'Proyecto de identidad visual',
        industria: 'Agricultura / Insumos',
        entrega: 'Manual de marca, packaging y material técnico',
        resumenTitulo: 'IDENTIDAD VISUAL PARA UN ACELERANTE AGRÍCULA DE ALTO IMPACTO. ',
        resumenTexto:
            'All-in Pacha requirió el desarrollo de una identidad visual robusta orientada a destacar en el mercado de insumos, proyectando su carácter innovador y su base técnica orientada a la sustentabilidad.',
        resumenImagen: `${base}images/All-in-Pacha-1.jpg`,
        desafioTexto:
            'Necesidad de estructurar una marca comercialmente competitiva y, de forma paralela, desarrollar herramientas técnicas de educación para el usuario final que cumplan con los estándares del sector.',
        nombreTexto:
            'Creación de identidad visual, diseño de packaging, diseño de folletería promocional de alto tiraje y desarrollo editorial del Manual de Compostaje.',
        aplicacionesImagen:`${base}images/All-in-Pacha-2.jpg`,
        aplicacionesTitulo: 'ADAPTABILIDAD PARA EMPAQUES Y MATERIAL EDUCATIVO.',
        aplicacionesTexto:
            'El sistema gráfico se implementó en los envases finales del producto, material impreso promocional para exposición en ferias especializadas del rubro y documentos técnicos.',
        aplicaciones: [
            { titulo: 'LINEAMENTOS DE IDENTIDAD VISUAL', texto: ' Normas de uso para proteger la identidad gráfica y asegurar la consistencia técnica en todas sus aplicaciones comerciales.', imagen: `${base}images/All-inPacha.jpg`, color: 'amarillo' },
        ],
    },
    {
        slug: 'consorcio-del-desierto',
        numero: '04',
        nombre: 'Concorcio del Desierto',
        logo: `${base}images/consorciodeldesierto-logo.jpg`,
        tagline: 'Proyecto de identidad visual',
        industria: 'Agricultura / Corporativo',
        entrega: 'Branding corporativo y manual de normas',
        resumenTitulo: 'IDENTIDAD INSTITUCIONAL PARA EL DESARROLLO AGRÍCOLA REGIONAL.',
        resumenTexto:
            'Consorcio del Desierto actúa como entidad articuladora de iniciativas sustentables. Su marca fue diseñada para reflejar solidez, liderazgo y un compromiso estructurado con el desarrollo agrícola.',
        resumenImagen: `${base}images/Consorcio-del-Desierto-1.jpg`,
        desafioTexto:
            'Proyectar una imagen de alto estándar corporativo que facilite el relacionamiento estratégico, la articulación con gestores de cooperativas y la validación formal de proyectos en el sector.',
        nombreTexto:
            'Creación de identidad corporativa, desarrollo de aplicaciones institucionales y Manual Técnico de Normas.',
        aplicacionesImagen:`${base}images/Consorcio-del-Desierto-3.jpg`,
        aplicacionesTitulo: 'PRESENCIA CORPORATIVA SÓLIDA Y COHERENTE',
        aplicacionesTexto:
            'El sistema contempla aplicaciones en papelería institucional, formatos de presentaciones formales y soportes para la comunicación corporativa.',
        aplicaciones: [
            { titulo: 'LINEAMIENTO DE IDENTIDAD VISUAL', texto: 'Directrices corporativas para mantener la formalidad, los colores institucionales y la correcta convivencia de la marca.', imagen: `${base}images/ConsorciodelDesierto.jpg`, color: 'amarillo' },
        ],
    },
    {
        slug: 'tecno-ambiente',
        numero: '05',
        nombre: 'TECNO AMBIENTE',
        logo: `${base}images/proyecto05-logo.jpg`,
        tagline: 'Proyecto de identidad visual',
        industria: 'Lorem ipsum',
        entrega: 'Manual de marca + aplicaciones',
        resumenTitulo: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING',
        resumenTexto:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        resumenImagen: `${base}images/Tecno-Ambiente-1.jpg`,
        desafioTexto:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        nombreTexto:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        aplicacionesImagen:`${base}images/Tecno-Ambiente-1.jpg`,
        aplicacionesTitulo: 'UNA IDENTIDAD PARA DISTINTOS SOPORTES.',
        aplicacionesTexto:
            'El sistema contempla aplicaciones en fondos, versiones cromáticas, mockups y piezas corporativas como la gigantografía, tarjeta de presentación, wallpaper y polera corporativa.',
        aplicaciones: [
            { titulo: 'MANUAL DE MARCA', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', imagen: `${base}images/Tecno-Ambiente-1.jpg`, color: 'amarillo' },
        ],
    },
    {
        slug: 'proyecto-06',
        numero: '06',
        nombre: 'PROYECTO 06',
        logo: `${base}images/proyecto06-logo.jpg`,
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
            { titulo: 'MANUAL DE MARCA', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', imagen: `${base}images/aplicacion-amarilla.jpg`, color: 'amarillo' },
        ],
    },
    {
        slug: 'proyecto-07',
        numero: '07',
        nombre: 'PROYECTO 07',
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
            { titulo: 'MANUAL DE MARCA', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', imagen: `${base}images/aplicacion-amarilla.jpg`, color: 'amarillo' },
        ],
    },
    {
        slug: 'proyecto-08',
        numero: '08',
        nombre: 'PROYECTO-08',
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
            { titulo: 'LOREM IPSUM', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', imagen: `${base}images/aplicacion-amarilla.jpg`, color: 'amarillo' },
        ],
    },
] 