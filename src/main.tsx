import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Nav from './layouts/Nav.tsx'
// import App from './App.tsx'
import Header from './layouts/Header.tsx'
import Nav from './layouts/Nav.tsx'
// import Footer from './layouts/Footer.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}

    <Header><Nav /></Header >
    {/* <Footer /> */}
    {/* <Nav /> */}
  </StrictMode>,
)
