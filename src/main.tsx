import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Global styles load before any component styles, so components can override them.
import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
