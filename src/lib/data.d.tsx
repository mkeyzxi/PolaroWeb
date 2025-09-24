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
      "Kategori cetakan foto instan dengan estetika vintage khas Polaroid klasik.",
    items: ["Square", "Wide", "Mini"],
  },
  "strip-layout": {
    header: "Strip Layout",
    description: "Cetakan foto dalam format strip klasik.",
    items: ["3 Strips", "4 Strips"],
  },
  "photo-prints": {
    header: "Photo Prints",
    description: "Cetakan foto ukuran standar.",
    items: ["2R", "3R", "4R"],
  },
  "creative-layouts": {
    header: "Creative Layouts",
    description: "Format kreatif untuk cetakan foto.",
    items: ["Snapshoot 6", "Snapshoot 8"],
  },
};
