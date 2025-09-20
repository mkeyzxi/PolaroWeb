// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import ClassicPolaroid from './components/pages/ClassicPolaroid';
import CreativeLayouts from './components/pages/CreativeLayouts';
import PhotoPrints from './components/pages/PhotoPrints';
import StripLayout from './components/pages/StripLayout';
import Beranda from './components/layouts/HeroSection';
import Header from './components/layouts/Header';
import Nav from './components/layouts/Nav';

function App() {

  return (
    <>
        <Header><Nav /></Header>
      <Routes>
        <Route path='/' element={<Beranda />} />
        <Route path='/classic-polaroid' element={<ClassicPolaroid />} />
        <Route path='/strip-layout' element={<CreativeLayouts />} />
        <Route path='/photo-prints' element={<PhotoPrints />} />
        <Route path='/creative-layouts' element={<StripLayout />} />
      </Routes>
    </>
  )
}

export default App

// kira-kira seperti ini
// import React, { useRef, useState, useEffect } from "react";

// type LayoutType = "3strip" | "4strip" | "square" | "wide";

// interface MediaDeviceInfoExtended extends MediaDeviceInfo {
//   deviceId: string;
//   label: string;
// }

// const App: React.FC = () => {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   const [devices, setDevices] = useState<MediaDeviceInfoExtended[]>([]);
//   const [selectedDevice, setSelectedDevice] = useState<string>("");
//   const [stream, setStream] = useState<MediaStream | null>(null);

//   const [layout, setLayout] = useState<LayoutType>("square");
//   const [photoCount, setPhotoCount] = useState<number>(0);
//   const [maxPhotos, setMaxPhotos] = useState<number>(1);

//   // Load daftar kamera
//   useEffect(() => {
//     navigator.mediaDevices.enumerateDevices().then((devices) => {
//       const videoDevices = devices.filter((d) => d.kind === "videoinput") as MediaDeviceInfoExtended[];
//       setDevices(videoDevices);
//       if (videoDevices.length > 0) {
//         setSelectedDevice(videoDevices[0].deviceId);
//       }
//     });
//   }, []);

//   // Start kamera
//   const startCamera = async () => {
//     if (stream) {
//       stream.getTracks().forEach((track) => track.stop());
//     }
//     const constraints: MediaStreamConstraints = {
//       video: { deviceId: selectedDevice ? { exact: selectedDevice } : undefined },
//     };
//     const newStream = await navigator.mediaDevices.getUserMedia(constraints);
//     setStream(newStream);
//     if (videoRef.current) {
//       videoRef.current.srcObject = newStream;
//     }
//   };

//   // Atur layout
//   const setLayoutConfig = (type: LayoutType) => {
//     setLayout(type);
//     setPhotoCount(0);

//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     if (type === "3strip") {
//       canvas.width = 400;
//       canvas.height = 600;
//       setMaxPhotos(3);
//     } else if (type === "4strip") {
//       canvas.width = 400;
//       canvas.height = 800;
//       setMaxPhotos(4);
//     } else if (type === "square") {
//       canvas.width = 500;
//       canvas.height = 500;
//       setMaxPhotos(1);
//     } else if (type === "wide") {
//       canvas.width = 800;
//       canvas.height = 400;
//       setMaxPhotos(1);
//     }
//   };

//   // Ambil foto
//   const takePhoto = () => {
//     const canvas = canvasRef.current;
//     const video = videoRef.current;
//     if (!canvas || !video) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     if (photoCount < maxPhotos) {
//       if (layout === "3strip" || layout === "4strip") {
//         const frameHeight = canvas.height / maxPhotos;
//         ctx.drawImage(video, 0, photoCount * frameHeight, canvas.width, frameHeight);
//       } else {
//         ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
//       }
//       setPhotoCount(photoCount + 1);
//     }
//   };

//   // Download hasil
//   const downloadPhoto = () => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const link = document.createElement("a");
//     link.download = `${layout}.png`;
//     link.href = canvas.toDataURL();
//     link.click();
//   };

//   // Set default layout saat pertama kali render
//   useEffect(() => {
//     setLayoutConfig("square");
//   }, []);

//   return (
//     <div className="p-4 text-center">
//       <h1 className="text-xl font-bold mb-2">📸 Polaroid Generator (React + TSX)</h1>
//       <p className="mb-4">Pilih layout lalu isi fotonya dari kamera</p>

//       {/* Pilihan layout */}
//       <div className="flex gap-2 justify-center mb-4 flex-wrap">
//         <button className="px-4 py-2 bg-indigo-500 text-white rounded" onClick={() => setLayoutConfig("3strip")}>
//           3 Strip
//         </button>
//         <button className="px-4 py-2 bg-indigo-500 text-white rounded" onClick={() => setLayoutConfig("4strip")}>
//           4 Strip
//         </button>
//         <button className="px-4 py-2 bg-indigo-500 text-white rounded" onClick={() => setLayoutConfig("square")}>
//           Square
//         </button>
//         <button className="px-4 py-2 bg-indigo-500 text-white rounded" onClick={() => setLayoutConfig("wide")}>
//           Wide
//         </button>
//       </div>

//       {/* Canvas hasil */}
//       <canvas ref={canvasRef} className="border-4 border-indigo-300 rounded-lg mx-auto mb-4" />

//       {/* Video kamera */}
//       <video
//         ref={videoRef}
//         autoPlay
//         playsInline
//         className="mx-auto mb-4 rounded border border-gray-300"
//         width={400}
//         height={300}
//       ></video>

//       {/* Controls */}
//       <div className="flex gap-2 justify-center flex-wrap">
//         <select
//           value={selectedDevice}
//           onChange={(e) => setSelectedDevice(e.target.value)}
//           className="px-2 py-1 border rounded text-black"
//         >
//           {devices.map((d, i) => (
//             <option key={d.deviceId} value={d.deviceId}>
//               {d.label || `Kamera ${i + 1}`}
//             </option>
//           ))}
//         </select>
//         <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={startCamera}>
//           Buka Kamera
//         </button>
//         <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={takePhoto} disabled={!stream}>
//           Ambil Foto
//         </button>
//         <button
//           className="px-4 py-2 bg-purple-600 text-white rounded"
//           onClick={downloadPhoto}
//           disabled={photoCount < maxPhotos}
//         >
//           Download
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;
