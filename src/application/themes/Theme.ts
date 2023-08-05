import { DefaultTheme } from 'styled-components'

// interface IResponsiveValues {
//   mobile: string
//   laptop: string
// }

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      background: {
        primary: string
        secondary: string
      }
      button: {
        primary: string
      }
      content: {
        primary: string
      }
      accent: {
        yellow: string
      }
    }
    gradient: {
      yellow: {
        left: string
        right: string
      }
    }
    size: {
      title3: string
      content: string
    }
    font: {
      title: string
      default: string
    }
    weight: {
      light: number
      medium: number
      bold: number
    }
  }
}

const Theme: DefaultTheme = {
  color: {
    background: {
      primary: 'white',
      secondary: 'black'
    },
    button: {
      primary: '#FDCC4E'
    },
    content: {
      primary: 'black'
    },
    accent: {
      yellow: '#FDCC4E'
    }
  },
  gradient: {
    yellow: {
      left: "linear-gradient(212deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%), #FDCC4E",
      right: "linear-gradient(171deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%), #FDCC4E"
    }
  },
  size: {
    title3: '3.6rem',
    content: '2.2rem',
  },
  font: {
    title: '"Rubik one", san serif',
    default: '"Roboto mono", mono'
  },
  weight: {
    light: 300,
    medium: 600,
    bold: 700
  }
}

export default Theme