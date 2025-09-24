import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getLayoutFromType,
  type LayoutType,
  type MediaDeviceInfoExtended,
} from "../../lib/utils";
import { useCamera } from "../../hooks/useCamera";

const CreativeLayoutsPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();

  // decode & normalisasi nama layout dari URL
  const rawType = decodeURIComponent(type || "");
  const normalizedType = rawType.toLowerCase().replace(/\s+/g, ""); // ex: "Snapshot 8" → "snapshot8"

  const [layout, setLayout] = useState<LayoutType>("snapshoot8");

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [devices, setDevices] = useState<MediaDeviceInfoExtended[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<string>("");

  const { stream, startCamera } = useCamera();

  const [photoCount, setPhotoCount] = useState<number>(0);
  const [maxPhotos, setMaxPhotos] = useState<number>(1);

  // array slot posisi
  const slotsRef = useRef<{ x: number; y: number; w: number; h: number }[]>([]);

  // load daftar kamera
  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const videoDevices = devices.filter(
        (d) => d.kind === "videoinput"
      ) as MediaDeviceInfoExtended[];
      setDevices(videoDevices);
      if (videoDevices.length > 0) {
        setSelectedDevice(videoDevices[0].deviceId);
      }
    });
  }, []);

  // setup layout sesuai URL
  // setup layout sesuai URL
useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const allowedLayouts = ["snapshoot6", "snapshoot8"];
  let validType = normalizedType;
  if (!allowedLayouts.includes(validType)) {
    validType = "snapshoot6";
  }

  const config = getLayoutFromType(validType);
  setLayout(config.layout);
  setMaxPhotos(config.maxPhotos);
  setPhotoCount(0);

  const extraBottomPadding = 80; // <<< padding bawah
  canvas.width = config.width;
  canvas.height = config.height + extraBottomPadding;

  const cols = config.cols || 2;
  const rows = config.maxPhotos / cols;
  const gapX = 20;
  const gapY = 20;
  const padding = 40;

  const slotWidth =
    (canvas.width - padding * 2 - gapX * (cols - 1)) / cols;
  const slotHeight =
    (config.height - padding * 2 - gapY * (rows - 1)) / rows; 
    // tinggi dihitung dari config.height, bukan canvas.height agar slot tidak ketarik ke bawah

  slotsRef.current = [];

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

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
}, [normalizedType]);


  // ambil foto dan isi slot kosong
  const takePhoto = () => {
    if (
      videoRef.current &&
      canvasRef.current &&
      photoCount < maxPhotos
    ) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // slot ke-n
      const slot = slotsRef.current[photoCount];
      if (!slot) return;

      // gambar foto ke slot
      ctx.drawImage(video, slot.x, slot.y, slot.w, slot.h );

      // buat border lagi supaya rapi
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1;
      
      ctx.strokeRect(slot.x, slot.y, slot.w, slot.h );

      setPhotoCount((p) => p + 1);
    }
    
  };

  // download hasil foto gabungan
  const downloadPhoto = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = `${normalizedType}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="p-4 text-center mt-15">
      {/* <h1 className="text-xl font-bold mb-2">📸 {rawType}</h1> */}
      <p className="mb-4">
        Layout: <strong>{layout}</strong> – Ambil {maxPhotos} foto sesuai slot
      </p>

      {/* Grid 2 kolom */}
      <div className="flex flex-wrap gap-10 justify-center items-center ">
        {/* Canvas hasil */}
        <canvas
          ref={canvasRef}
          className="border-black border w-full max-w-[300px]  bg-white pb-10"
        />

        {/* Video kamera */}
        <div className="flex items-center justify-center">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="rounded border border-gray-300 w-full max-w-[400px] aspect-[1/1] object-cover"
          ></video>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-2 justify-center flex-wrap mt-4">
        <select
          value={selectedDevice}
          onChange={(e) => setSelectedDevice(e.target.value)}
          className="px-2 py-1 border rounded text-black"
        >
          {devices.map((d, i) => (
            <option key={d.deviceId} value={d.deviceId}>
              {d.label || `Kamera ${i + 1}`}
            </option>
          ))}
        </select>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded"
          onClick={() => {
            if (videoRef.current) {
              startCamera(selectedDevice, videoRef.current);
            }
          }}
        >
          Buka Kamera
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={takePhoto}
          disabled={!stream}
        >
          Ambil Foto
        </button>
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded"
          onClick={downloadPhoto}
          disabled={photoCount < maxPhotos}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default CreativeLayoutsPage;


