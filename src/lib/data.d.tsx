// src/lib/data.ts
export interface PolaroidCategory {
  header: string; // Header untuk TitleForPage
  description: string; // untuk paragraf
  items: string[]; // subHeader
}

export const dataPolaroid: Record<string, PolaroidCategory> = {
  "classic-polaroid": {
    header: "Classic Polaroid",
    description:
      "Foto instan dengan nuansa vintage yang ikonik. Cocok untuk mengabadikan momen nostalgia.",
    items: ["Square", "Wide", "Mini"],
  },
  "strip-layout": {
    header: "Strip Layout",
    description:
      "Cetakan foto dalam bentuk strip yang unik dan dinamis, sempurna untuk menceritakan serangkaian momen.",
    items: ["3 Strips", "4 Strips"],
  },
  "photo-prints": {
    header: "Photo Prints",
    description:
      "Cetakan foto standar berkualitas tinggi yang fleksibel untuk berbagai keperluan, dari bingkai hingga album.",
    items: ["2R", "3R", "4R"],
  },
  "creative-layouts": {
    header: "Creative Layouts",
    description:
      "Cetakan foto dengan format inovatif yang memungkinkan Anda mengeksplorasi kreativitas dan tampil beda.",
    items: ["Snapshoot 6", "Snapshoot 8"],
  },
};
  
