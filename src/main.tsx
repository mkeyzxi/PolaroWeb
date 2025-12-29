import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
// import Header from './components/layouts/Header'
// import Nav from './components/layouts/Nav'
// import Nav from './layouts/Nav.tsx'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

// import Footer from './layouts/Footer.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>

    {/* <Header><Nav /></Header > */}
    {/* <Footer /> */}
    {/* <Nav /> */}
  </StrictMode>,
)
