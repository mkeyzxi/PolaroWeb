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
