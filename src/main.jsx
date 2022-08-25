import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/home/Home'
import { FormPage } from './pages/Form'
import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FormPage />
    </ThemeProvider>
  </React.StrictMode>
)
