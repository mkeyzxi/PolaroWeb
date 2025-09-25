import React from "react";
import { usePwaPrompt } from "../hooks/usePwaPrompt";

const PwaInstallButton: React.FC = () => {
  const { installPrompt, installed, triggerInstall } = usePwaPrompt();

  if (installed || !installPrompt) return null;

  return (
    <button
      onClick={triggerInstall}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px 16px",
        backgroundColor: "#020618",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        zIndex: 9999,
      }}
    >
      Install Aplikasi
    </button>
  );
};

export default PwaInstallButton;
