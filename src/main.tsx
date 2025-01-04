import App from './App'
import { StrictMode } from 'react'
import GlobalStyle from './GlobalStyles'
import { createRoot } from 'react-dom/client'
import { ModelProvider } from './contexts/ModelContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModelProvider>
      <GlobalStyle />
      <App />
    </ModelProvider>
  </StrictMode>
)
