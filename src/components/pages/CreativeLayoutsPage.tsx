import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getLayoutFromType,
  type LayoutType,
  type MediaDeviceInfoExtended,
} from "../../lib/utils";
import { useCamera } from "../../hooks/useCamera";
import { Camera, CameraOff, ImageDown, Palette } from "lucide-react";
import TitleForPage from "../TItleForPage";
import BackgroundPicker from "../BackgroundPicker";

const allowedLayouts = ["snapshoot6", "snapshoot8"];

// Helper function to draw image with cover mode
const drawImageCover = (
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvasWidth: number,
  canvasHeight: number
) => {
  const imgAspect = img.width / img.height;
  const canvasAspect = canvasWidth / canvasHeight;
  let sx, sy, sw, sh;
  if (imgAspect > canvasAspect) {
    sh = img.height;
    sw = img.height * canvasAspect;
    sy = 0;
    sx = (img.width - sw) / 2;
  } else {
    sw = img.width;
    sh = img.width / canvasAspect;
    sx = 0;
    sy = (img.height - sh) / 2;
  }
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvasWidth, canvasHeight);
};

const CreativeLayoutsPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();

  const rawType = decodeURIComponent(type || "");
  const normalizedType = rawType.toLowerCase().replace(/\s+/g, "");

  const [layout, setLayout] = useState<LayoutType>("snapshoot8");

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [selectedDevice, setSelectedDevice] = useState<string>("");

  const { stream, startCamera } = useCamera();

  const [photoCount, setPhotoCount] = useState<number>(0);
  const [maxPhotos, setMaxPhotos] = useState<number>(1);

  // State untuk background
  const [backgroundImage, setBackgroundImage] = useState<HTMLImageElement | null>(null);
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);

  const slotsRef = useRef<{ x: number; y: number; w: number; h: number }[]>([]);
  const capturedPhotosRef = useRef<{ slotIndex: number; imageData: ImageData }[]>([]);

  // Load daftar kamera
  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const videoDevices = devices.filter(
        (d) => d.kind === "videoinput"
      ) as MediaDeviceInfoExtended[];
      if (videoDevices.length > 0) {
        setSelectedDevice(videoDevices[0].deviceId);
      }
    });
  }, []);

  // Handler untuk background picker
  const handleSelectImage = (img: HTMLImageElement) => {
    setBackgroundImage(img);
  };

  const handleSelectColor = (color: string) => {
    setBackgroundImage(null);
    setBackgroundColor(color);
  };

  // Setup layout canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let validType = normalizedType;
    if (!allowedLayouts.includes(validType)) validType = "snapshoot6";

    const config = getLayoutFromType(validType);
    setLayout(config.layout);
    setMaxPhotos(config.maxPhotos);

    if (!backgroundImage && backgroundColor === "#ffffff") {
      setPhotoCount(0);
      capturedPhotosRef.current = [];
    }

    const extraBottomPadding = 80;
    canvas.width = config.width;
    canvas.height = config.height + extraBottomPadding;

    const cols = config.cols || 2;
    const rows = config.maxPhotos / cols;
    const gapX = 20;
    const gapY = 25;
    const padding = 40;

    const slotWidth = (canvas.width - padding * 2 - gapX * (cols - 1)) / cols;
    const slotHeight = (config.height - padding * 2 - gapY * (rows - 1)) / rows;

    slotsRef.current = [];

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background: custom image atau warna
    if (backgroundImage) {
      drawImageCover(ctx, backgroundImage, canvas.width, canvas.height);
    } else {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = padding + col * (slotWidth + gapX);
        const y = padding + row * (slotHeight + gapY);
        ctx.strokeRect(x, y, slotWidth, slotHeight);
        slotsRef.current.push({ x, y, w: slotWidth, h: slotHeight });
      }
    }

    // Redraw captured photos
    capturedPhotosRef.current.forEach(({ slotIndex, imageData }) => {
      const slot = slotsRef.current[slotIndex];
      if (slot) {
        ctx.putImageData(imageData, slot.x, slot.y);
        ctx.strokeRect(slot.x, slot.y, slot.w, slot.h);
      }
    });
  }, [normalizedType, backgroundImage, backgroundColor]);

  // Ambil foto ke slot
  const takePhoto = () => {
    if (!videoRef.current || !canvasRef.current || photoCount >= maxPhotos) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const slot = slotsRef.current[photoCount];
    if (!slot) return;

    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;

    const slotAspect = slot.w / slot.h;
    const videoAspect = videoWidth / videoHeight;

    let sx = 0, sy = 0, sw = videoWidth, sh = videoHeight;

    if (videoAspect > slotAspect) {
      sw = videoHeight * slotAspect;
      sx = (videoWidth - sw) / 2;
    } else {
      sh = videoWidth / slotAspect;
      sy = (videoHeight - sh) / 2;
    }

    ctx.drawImage(video, sx, sy, sw, sh, slot.x, slot.y, slot.w, slot.h);

    const imageData = ctx.getImageData(slot.x, slot.y, slot.w, slot.h);
    capturedPhotosRef.current.push({ slotIndex: photoCount, imageData });

    ctx.strokeRect(slot.x, slot.y, slot.w, slot.h);

    setPhotoCount((p) => p + 1);
  };

  // Download canvas
  const downloadPhoto = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    const link = document.createElement("a");
    link.download = `${normalizedType}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();

    ctx.lineWidth = 1;
  };

  return (
    <div className="p-4 text-center md:mt-15 mb-20 md:mb-0">
      <TitleForPage header="Creative Layouts" category="creative-layouts" subHeader={allowedLayouts} />
      <p className="mb-4">
        <strong>{layout.toUpperCase()}</strong> | <span className="text-[var(--color-accent)] font-bold">Ambil {maxPhotos} foto</span>
      </p>

      <div className="flex flex-wrap gap-10 justify-center items-start">
        <canvas
          ref={canvasRef}
          className="border-black border w-full max-w-[300px] bg-white "
        />

        <div className="flex items-center justify-center">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="rounded border border-[var(--color-primary)] w-full max-w-[400px] aspect-[1/1] object-cover"
          />
        </div>
      </div>

      <div className="flex justify-between gap-5 px-5 md:gap-2 fixed backdrop-blur-sm md:backdrop-blur-none rounded-2xl bottom-0 md:bg-transparent p-3 md:bottom-5 left-0 right-0 md:justify-center flex-wrap mt-4 items-center">
        <button
          className="px-4 py-3 md:py-2 bg-purple-600 flex gap-2 text-white rounded-full md:rounded-[2px]"
          onClick={() => setIsPickerOpen(true)}
        >
          <Palette /> <div className="hidden md:block">Pilih Background</div>
        </button>

        <button
          className="px-4 py-3 md:py-2 bg-[var(--color-accent)] flex gap-2 text-white rounded-full md:rounded-[2px]"
          onClick={() => {
            if (videoRef.current) startCamera(selectedDevice, videoRef.current);
          }}
        >
          <CameraOff /> <div className="hidden md:block">Buka Kamera</div>
        </button>

        <button
          className="px-4 py-3 md:py-2 bg-[var(--color-secondary)] text-white rounded-full md:rounded-[2px] flex gap-2"
          onClick={takePhoto}
          disabled={!stream}
        >
          <Camera /><div className="hidden md:block">Ambil Gambar</div>
        </button>

        <button
          className="px-4 py-3 md:py-2 bg-[var(--color-primary)] text-white rounded-full md:rounded-[2px] flex gap-2"
          onClick={downloadPhoto}
          disabled={photoCount < maxPhotos}
        >
          <ImageDown /><div className="hidden md:block">Download</div>
        </button>
      </div>

      {/* Background Picker Modal */}
      <BackgroundPicker
        isOpen={isPickerOpen}
        onClose={() => setIsPickerOpen(false)}
        onSelectImage={handleSelectImage}
        onSelectColor={handleSelectColor}
        currentColor={backgroundColor}
      />
    </div>
  );
};

export default CreativeLayoutsPage;
