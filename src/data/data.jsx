import { getLogements } from '../data/logements.jsx'
import LogoDesktop from '../assets/logo_desktop.svg'
import LogoFooter from '../assets/logo_footer.svg'
import Logo404 from '../assets/404.svg'


const header = {
  logo: {
    src: LogoDesktop,
    alt: 'logo red Kasa'
  },
  nav: [
    {
      href: '/',
      text: 'Accueil'
    },
    {
      href: '/apropos',
      text: 'A Propos'
    },
  ],
}

const footer = {
  logo: {
    src: LogoFooter,
    alt: 'logo white Kasa'
  },
  text: '© 2020 Kasa. All rights reserved'
}

const contentPageError = {
  logo: {
    src: Logo404,
    alt: 'logo Error: 404'
  },
  text: 'Oups! La page que vous demandez n\'existe pas.',
  link: {
    href: '/',
    text: 'Retourner sur la page d’accueil'
  }
}

const pageAcueil = {
  titlebg: {
    img: {
      src: '/images/img1.png',
      alt: ''
    },
    text: 'Chez vous, partout et ailleurs'
  },
  logements: await getLogements()
}

const pageApropos = {
  titlebg: {
    img: {
      src: '/images/img2.png',
      alt: ''
    },
    text: ''
  },
  collapses: [
    {
      name: 'Fiabilité',
      text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
    },
    {
      name: 'Respect',
      text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    },
    {
      name: 'Service',
      text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
    },
    {
      name: 'Sécurité',
      text: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
    },
  ]
}

const pageLogement = {
  collapses: [
    {
      name: '',
    },
    {
      name: '',
    },
  ],
}

export {
  header,
  footer,
  contentPageError,
  pageAcueil,
  pageApropos,
};