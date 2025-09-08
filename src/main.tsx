import App from './App'
import { StrictMode } from 'react'
import GlobalStyle from './themes/GlobalStyles'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
)
