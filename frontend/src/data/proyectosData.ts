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
    desafioTexto: string
    nombreTexto: string
    aplicaciones: {
        titulo: string
        texto: string
        color: 'amarillo' | 'negro' | 'naranjo'
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
        resumenImagen: `${base}images/bioconcordia-mockup.png`,
        desafioTexto:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        nombreTexto:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        aplicaciones: [
            { titulo: 'MANUAL DE MARCA', texto: 'Normas de uso para proteger la identidad, sus colores, tipografías y aplicaciones.', color: 'amarillo' },
            { titulo: 'APLICACIONES', texto: 'Mockups y piezas visuales pensadas para comunicar presencia y consistencia de marca.', color: 'negro' },
            { titulo: 'LOREM IPSUM', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', color: 'naranjo' },
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
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        resumenImagen: `${base}images/sustancial-mockup.png`,
        desafioTexto:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        
        nombreTexto:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        aplicaciones: [
            { titulo: 'MANUAL DE MARCA', texto: 'Normas de uso para proteger la identidad, sus colores, tipografías y aplicaciones.', color: 'amarillo' },
            { titulo: 'APLICACIONES', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', color: 'negro' },
            { titulo: 'LOREM IPSUM', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', color: 'naranjo' },
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
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        resumenImagen: `${base}images/allinpacha-mockup.png`,
        desafioTexto:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        nombreTexto:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        aplicaciones: [
            { titulo: 'MANUAL DE MARCA', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', color: 'amarillo' },
            { titulo: 'APLICACIONES', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', color: 'negro' },
            { titulo: 'LOREM IPSUM', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', color: 'naranjo' },
        ],
    },
    {
        slug: 'consorcio-del-desierto',
        numero: '04',
        nombre: 'CONSORCIO DEL DESIERTO',
        logo: `${base}/images/consorciodeldesierto-logo.jpg`,
        tagline: 'Proyecto de identidad visual',
        industria: 'Agricultura',
        entrega: 'Manual de marca + aplicaciones',
        resumenTitulo: 'LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING',
        resumenTexto:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        resumenImagen: `${base}/images/allinpacha-mockup.png`,
        desafioTexto:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        nombreTexto:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        aplicaciones: [
            { titulo: 'MANUAL DE MARCA', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', color: 'amarillo' },
            { titulo: 'APLICACIONES', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', color: 'negro' },
            { titulo: 'LOREM IPSUM', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', color: 'naranjo' },
        ],
    },
    {
        slug: 'proyecto-05',
        numero: '05',
        nombre: 'PROYECTO 05',
        logo: `${base}images/proyecto05-logo.jpg`,
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
            { titulo: 'MANUAL DE MARCA', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', color: 'amarillo' },
            { titulo: 'APLICACIONES', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', color: 'negro' },
            { titulo: 'LOREM IPSUM', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', color: 'naranjo' },
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
            { titulo: 'MANUAL DE MARCA', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', color: 'amarillo' },
            { titulo: 'APLICACIONES', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', color: 'negro' },
            { titulo: 'LOREM IPSUM', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', color: 'naranjo' },
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
            { titulo: 'MANUAL DE MARCA', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', color: 'amarillo' },
            { titulo: 'APLICACIONES', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', color: 'negro' },
            { titulo: 'LOREM IPSUM', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', color: 'naranjo' },
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
            { titulo: 'LOREM IPSUM', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', color: 'amarillo' },
            { titulo: 'APLICACIONES', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', color: 'negro' },
            { titulo: 'LOREM IPSUM', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.', color: 'naranjo' },
        ],
    },
] 