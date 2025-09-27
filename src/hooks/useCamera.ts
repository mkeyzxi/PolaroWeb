import { useState } from "react";

export function useCamera() {
  const [stream, setStream] = useState<MediaStream | null>(null);

  /**
   * Start camera:
   * - Jika deviceId null → pakai kamera default (biar browser prompt izin dulu)
   * - Jika deviceId spesifik → langsung pakai kamera itu
   */
  const startCamera = async (
    deviceId: string | null,
    videoEl: HTMLVideoElement
  ) => {
    // stop stream lama
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }

    try {
      const constraints = deviceId
        ? { video: { deviceId: { exact: deviceId } } }
        : { video: true }; // default camera

      const newStream = await navigator.mediaDevices.getUserMedia(constraints);
      videoEl.srcObject = newStream;
      setStream(newStream);
    } catch (err) {
      console.error("Tidak bisa mengakses kamera:", err);
      alert(
        "Tidak bisa mengakses kamera. Pastikan situs HTTPS/localhost dan izin kamera diberikan di browser."
      );
    }
  };

  return { stream, startCamera };
}
