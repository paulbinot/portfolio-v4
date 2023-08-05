import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${({ theme }) => theme.font.default};
    font-size: 10px;
    height: 100vh;
    scroll-behavior: smooth;
    background: ${({ theme }) => theme.color.background.secondary};
  }

  body {
    height: 100%;
    width: 100%;
    margin: 0;
    color: ${({ theme }) => theme.color.content.primary};
    box-sizing: border-box;
  }

  #root {
    min-height: 100%;
  }

  button {
    background-color: transparent;
    border: none;
    font-family: ${({ theme }) => theme.font.default};
  }

  b, strong {
    font-weight: ${({ theme }) => theme.weight.medium};
  }
`
export default GlobalStyle