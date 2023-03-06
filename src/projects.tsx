import braseIcon from './assets/BraseIcon.png'
import royalIcon from './assets/RoyalIcon.png'
import nimIcon from './assets/NIM.png'

export const Projects = [
    { // Brase
        title: 'Brase', 
        description: 'A Chat Created with ReactJs', 
        status: 'In development', 
        picture: braseIcon, 
        projectURL: 'https://brase-indev.web.app', 
        github: 'https://github.com/SrDouglax/brase',
        tags: [
            { 
                docs: 'https://reactjs.org/', 
                iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' },
            { 
                docs: 'https://firebase.google.com/', 
                iconURL: 'https://i.pinimg.com/originals/07/ca/4a/07ca4afbde70ce0c995b3f63e9c04ceb.png' },
            { 
                docs: 'https://sass-lang.com/', 
                iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png' },
        ]
    },
    { // Royal
        title: 'Royal', 
        description: 'Game Engine in Alpha', 
        status: 'In development', 
        picture: royalIcon, 
        projectURL: 'https://royalengine.vercel.app/', 
        github: 'https://github.com/SrDouglax/Royal',
        tags: [
            { 
                docs: 'https://reactjs.org/', 
                iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' },
            { 
                docs: 'https://sass-lang.com/', 
                iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png' },
        ]
    },
    { // NIM
        title: 'NIM', 
        description: 'Jogo NIM', 
        status: 'In development', 
        picture: nimIcon, 
        projectURL: 'https://jogo-nim.vercel.app/', 
        github: 'https://github.com/SrDouglax/Jogo-Nim',
        tags: [{
            docs: 'https://developer.mozilla.org/en-US/docs/Web',
            iconURL: 'https://pcodinomebzero.neocities.org/Imagens/javascript1.png'
        }]
    },
]