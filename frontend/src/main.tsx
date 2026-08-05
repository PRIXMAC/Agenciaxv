import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/globals.css'
import './styles/layout.css'
import App from './App'

const basename = import.meta.env.PROD ? '/Agenciaxv' : ''

const redirect = sessionStorage.getItem('redirect')
if (redirect) {
    sessionStorage.removeItem('redirect')
    window.history.replaceState(null, '', basename + '/' + redirect)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)