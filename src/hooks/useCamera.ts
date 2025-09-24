import { useState } from "react";

export function useCamera() {
  const [stream, setStream] = useState<MediaStream | null>(null);

  const startCamera = async (deviceId: string, videoEl: HTMLVideoElement) => {
    if (stream) {
      // stop stream lama
      stream.getTracks().forEach((track) => track.stop());
    }
    const newStream = await navigator.mediaDevices.getUserMedia({
      video: { deviceId: { exact: deviceId } },
    });
    videoEl.srcObject = newStream;
    setStream(newStream);
  };

  return { stream, startCamera };
}
