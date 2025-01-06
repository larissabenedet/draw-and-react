import App from './App'
import { StrictMode } from 'react'
import GlobalStyle from './themes/GlobalStyles'
import { createRoot } from 'react-dom/client'
import { ModelProvider } from './contexts/ModelContext'
import { WebcamProvider } from './contexts/WebcamContext'
import { ShapeModalProvider } from './contexts/ShapeModalContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModelProvider>
      <WebcamProvider>
        <ShapeModalProvider>
          <GlobalStyle />
          <App />
        </ShapeModalProvider>
      </WebcamProvider>
    </ModelProvider>
  </StrictMode>
)
