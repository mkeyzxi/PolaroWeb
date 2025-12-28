
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Beranda from "./components/layouts/HeroSection";
import Header from "./components/layouts/Header";
import Nav from "./components/layouts/Nav";
import CustomPage from "./components/pages/CustomPage";
import CreativeLayoutsPage from "./components/pages/CreativeLayoutsPage";
import ClassicPolaroidPage from "./components/pages/ClassicPolaroidPage";
import PhotoPrintsPage from "./components/pages/PhotoPrintsPage";
import StripLayoutPage from "./components/pages/StripLayoutPage";
// import { usePwaPrompt } from "./hooks/usePwaPrompt";
// import PwaInstallButton from "./components/PwaInstallButton";
function App() {
  // pakai hook
  // const { installPrompt, installed, triggerInstall } = usePwaPrompt();

  return (
    <>
      <Header>
        <Nav />
        {/* <PwaInstallButton /> */}
      </Header>

      {/* Tombol Install PWA
      {!installed && installPrompt && (
        <div style={{ padding: "10px", textAlign: "center" }}>
          <button
            onClick={triggerInstall}
            style={{
              padding: "8px 16px",
              backgroundColor: "#020618",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Install Aplikasi
          </button>
        </div>
      )}
      {installed && (
        <p style={{ textAlign: "center", color: "green" }}>
          Aplikasi sudah terinstal 🎉
        </p>
      )} */}

      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/:category" element={<CustomPage />} />
        <Route path="/creative-layouts/:type" element={<CreativeLayoutsPage />} />
        <Route path="/classic-polaroid/:type" element={<ClassicPolaroidPage />} />
        <Route path="/photo-prints/:type" element={<PhotoPrintsPage />} />
        <Route path="/strip-layout/:type" element={<StripLayoutPage />} />
      </Routes>
    </>
  );
}

export default App;


