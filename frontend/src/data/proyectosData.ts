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
            aplicaciones: [
            { titulo: 'MANUAL DE MARCA', texto: 'Normas de uso para proteger la identidad, sus colores, tipografías y aplicaciones.', imagen: `${base}images/`, color: 'amarillo' },
        ],
    },
    {
        slug: 'sustancial',
        numero: '02',
        nombre: 'Sustancial',
        logo:  `${base}images/sustancial-logo.jpg` ,
        tagline: 'Proyecto de identidad visual',
        industria: 'Agricultura',
        entrega: 'Manual de marca + aplicaciones',
        resumenTitulo: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING',
        resumenTexto:
            'Empresa perteneciente al Consorcio del Desierto, dedicada a la fabricación de bioinsumos 100% orgánicos, libres de agentes químicos, pesticidas y plaguicidas, para la potenciación del suelo agrícola.',
        resumenImagen: `${base}images/Sustancial-1.jpg`,
        desafioTexto:
            'Necesidad de desarrollar una marca propia desde cero, requiriendo un nuevo nombre, identidad visual y soportes para su comercialización y distribución.',
        
        nombreTexto:
            ' Creación de naming, diseño de identidad visual corporativa, diseño de packaging, etiquetado de productos y diseño web.',
        aplicaciones: [
            { titulo: 'MANUAL DE MARCA', texto: 'Normas de uso para proteger la identidad, sus colores, tipografías y aplicaciones.', imagen: `${base}images/Sustancial-2.jpg`, color: 'amarillo' },
        ],
    },
    {
        slug: 'all-in-pacha',
        numero: '03',
        nombre: 'All-in Pacha',
        logo: `${base}images/allinpacha-logo.jpg`,
        tagline: 'Proyecto de identidad visual',
        industria: 'Agricultura',
        entrega: 'Manual de marca + aplicaciones',
        resumenTitulo: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING',
        resumenTexto:
            ' Marca de bioinsumos generada por Sustancial, enfocada específicamente en el desarrollo de acelerantes orgánicos para suelos agrícolas.',
        resumenImagen: `${base}images/All-in-Pacha-1.jpg`,
        desafioTexto:
            ' Estructurar la identidad visual de la línea de productos y generar las herramientas corporativas necesarias para la correcta instrucción de uso técnico.',
        nombreTexto:
            'Creación de naming, diseño de identidad visual, manual de normas gráficas, diseño corporativo (folleto informativo) y diseño de etiqueta para el producto.',
        aplicaciones: [
            { titulo: 'MANUAL DE MARCA', texto: 'Normas de uso para proteger la identidad, sus colores, tipografías y aplicaciones.', imagen: `${base}images/All-in-Pacha-2.jpg`, color: 'amarillo' },
        ],
    },
    {
        slug: 'consorcio-del-desierto',
        numero: '04',
        nombre: 'Concorcio del Desierto',
        logo: `${base}images/consorciodeldesierto-logo.jpg`,
        tagline: 'Proyecto de identidad visual',
        industria: 'Agricultura',
        entrega: 'Manual de marca + aplicaciones',
        resumenTitulo: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING',
        resumenTexto:
            'Organización articuladora de innovación tecnológica y desarrollo agrícola en entornos áridos, respaldada por Corfo y Codesser.',
        resumenImagen: `${base}images/Consorcio-del-Desierto-1.jpg`,
        desafioTexto:
            'Carencia de directrices visuales estructuradas y de un manual de normas gráficas, lo que le dificulta mantener la coherencia corporativa y ejecutar una gestión profesional de sus canales digitales.',
        nombreTexto:
            'Diseño de manual de normas gráficas, presentaciones corporativas, piezas gráficas para redes sociales y edición audiovisual (reels y videos).',
        aplicaciones: [
            { titulo: 'MANUAL DE MARCA', texto: 'Normas de uso para proteger la identidad, sus colores, tipografías y aplicaciones.', imagen: `${base}images/Consorcio-del-Desierto-2.jpg`, color: 'amarillo' },
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
        aplicaciones: [
            { titulo: 'MANUAL DE MARCA', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', imagen: `${base}images/aplicacion-amarilla.jpg`, color: 'amarillo' },
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
        aplicaciones: [
            { titulo: 'LOREM IPSUM', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', imagen: `${base}images/aplicacion-amarilla.jpg`, color: 'amarillo' },
        ],
    },
] 