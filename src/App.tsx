
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/layouts/Header";
import Nav from "./components/layouts/Nav";
import CustomPage from "./components/pages/CustomPage";
import CreativeLayoutsPage from "./components/pages/CreativeLayoutsPage";
import ClassicPolaroidPage from "./components/pages/ClassicPolaroidPage";
import PhotoPrintsPage from "./components/pages/PhotoPrintsPage";
import StripLayoutPage from "./components/pages/StripLayoutPage";
import { BackgroundProvider } from "./context/BackgroundContext";
import Beranda from "./components/pages/Beranda";
import PageTransition from "./components/PageTransition";

function App() {
  return (
    <BackgroundProvider>
      <Header>
        <Nav />
      </Header>
      <Routes>

        <Route path="" element={<Beranda />} />
        <Route path="/" element={<Beranda />} />
      </Routes>
      <PageTransition>
        <Routes>
          <Route path="/:category" element={<CustomPage />} />
          <Route path="/creative-layouts/:type" element={<CreativeLayoutsPage />} />
          <Route path="/classic-polaroid/:type" element={<ClassicPolaroidPage />} />
          <Route path="/photo-prints/:type" element={<PhotoPrintsPage />} />
          <Route path="/strip-layout/:type" element={<StripLayoutPage />} />
        </Routes>
      </PageTransition>
    </BackgroundProvider>
  );
}

export default App;
