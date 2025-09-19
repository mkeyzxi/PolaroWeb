export const takePhoto = (
  canvas: HTMLCanvasElement,
  video: HTMLVideoElement,
  photoCount: number,
  maxPhotos: number,
  layout: string
) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return false;

  if (photoCount < maxPhotos) {
    if (layout === "3strip" || layout === "4strip") {
      const frameHeight = canvas.height / maxPhotos;
      ctx.drawImage(video, 0, photoCount * frameHeight, canvas.width, frameHeight);
    } else {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    }
    return true; // berhasil ambil foto
  }
  return false; // tidak ambil foto
};

type DownloadPhotoProps = {
  canvas: HTMLCanvasElement | null;
  fileName?: string;
};

export const downloadPhoto = ({ canvas, fileName = 'photo.png' }: DownloadPhotoProps) => {
  if (!canvas) return;
  const link = document.createElement('a');
  link.download = fileName;
  link.href = canvas.toDataURL();
  link.click();
};

export type LayoutType = '3strip' | '4strip' | 'square' | 'wide';

export interface LayoutResult {
  width: number;
  height: number;
  maxPhotos: number;
}

export const getLayoutConfig = (type: LayoutType): LayoutResult => {
  switch (type) {
    case '3strip':
      return { width: 400, height: 600, maxPhotos: 3 };
    case '4strip':
      return { width: 400, height: 800, maxPhotos: 4 };
    case 'square':
      return { width: 500, height: 500, maxPhotos: 1 };
    case 'wide':
      return { width: 800, height: 400, maxPhotos: 1 };
    default:
      return { width: 400, height: 600, maxPhotos: 1 };
  }
};
export default getLayoutConfig;


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
