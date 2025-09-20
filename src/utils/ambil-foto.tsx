// utils/takePhoto.ts
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

export default takePhoto;
