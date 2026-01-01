// src/lib/data.ts
export interface PolaroidCategory {
  header: string; // Header untuk TitleForPage
  description: string; // untuk paragraf
  items: string[]; // subHeader
  link: string[];
}

export const dataPolaroid: Record<string, PolaroidCategory> = {
  "classic-polaroid": {
    header: "Classic Polaroid",
    description:
      "Foto instan dengan nuansa vintage yang ikonik. Cocok untuk mengabadikan momen nostalgia.",
    items: ["Square", "Wide", "Mini"],
    link: ["/classic-polaroid/square", "/classic-polaroid/wide", "/classic-polaroid/mini"]
  },
  "strip-layout": {
    header: "Strip Layout",
    description:
      "Cetakan foto dalam bentuk strip yang unik dan dinamis, sempurna untuk menceritakan serangkaian momen.",
    items: ["3strips", "4strips"],
    link: ["/strip-layout/3strips", "/strip-layout/4strips"]
  },
  "photo-prints": {
    header: "Photo Prints",
    description:
      "Cetakan foto standar berkualitas tinggi yang fleksibel untuk berbagai keperluan, dari bingkai hingga album.",
    items: ["2R", "3R", "4R"],
    link: ["/photo-prints/2r", "/photo-prints/3r", "/photo-prints/4r"]
  },
  "creative-layouts": {
    header: "Creative Layouts",
    description:
      "Cetakan foto dengan format inovatif yang memungkinkan Anda mengeksplorasi kreativitas dan tampil beda.",
    items: ["Snapshoot6", "Snapshoot8"],
    link: ["/creative-layouts/Snapshoot6", "/creative-layouts/Snapshoot8"]
  },
};

