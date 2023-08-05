import { ThemeProvider, styled } from 'styled-components'
import localesEn from '../locales/en.json'
import Theme from './themes/Theme'
import GlobalStyle from './components/layout/GlobalStyle'
import { IntlProvider } from 'react-intl'
import { useState } from 'react'
import { DEFAULT_LOCALE } from './constants/locale'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const messages: Record<string, any> = {
  en: localesEn
}

const App: React.FC = () => {
  const [locale] = useState<string>(DEFAULT_LOCALE)

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <IntlProvider locale={locale} defaultLocale={DEFAULT_LOCALE} messages={messages[locale]}>
        <Container>
          test
        </Container>
      </IntlProvider>
    </ThemeProvider>
  )
}

export default App

const Container = styled.div`
  padding: 1px;
  background: red;
`