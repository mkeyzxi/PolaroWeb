// utils/startCamera.ts
export const startCameraStream = async (
  selectedDevice?: string,
  oldStream?: MediaStream
): Promise<MediaStream> => {
  // Hentikan stream lama dulu
  if (oldStream) {
    oldStream.getTracks().forEach((track) => track.stop());
  }

  // Buat constraints kamera
  const constraints: MediaStreamConstraints = {
    video: selectedDevice ? { deviceId: { exact: selectedDevice } } : true,
  };

  // Ambil stream baru
  const newStream = await navigator.mediaDevices.getUserMedia(constraints);
  return newStream;
};
