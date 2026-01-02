// src/lib/data.ts
export interface PolaroidCategory {
  header: string; // Header for TitleForPage
  description: string; // for paragraph
  items: string[]; // subHeader
  link: string[];
}

export const dataPolaroid: Record<string, PolaroidCategory> = {
  "classic-polaroid": {
    header: "Classic Polaroid",
    description:
      "Instant photos with iconic vintage vibes. Perfect for capturing nostalgic moments.",
    items: ["Square", "Wide", "Mini"],
    link: ["/classic-polaroid/square", "/classic-polaroid/wide", "/classic-polaroid/mini"]
  },
  "strip-layout": {
    header: "Strip Layout",
    description:
      "Unique and dynamic strip photo prints, perfect for telling a series of moments.",
    items: ["3strips", "4strips"],
    link: ["/strip-layout/3strips", "/strip-layout/4strips"]
  },
  "photo-prints": {
    header: "Photo Prints",
    description:
      "High-quality standard photo prints that are flexible for various purposes, from frames to albums.",
    items: ["2r", "3r", "4r"],
    link: ["/photo-prints/2r", "/photo-prints/3r", "/photo-prints/4r"]
  },
  "creative-layouts": {
    header: "Creative Layouts",
    description:
      "Photo prints with innovative formats that let you explore creativity and stand out.",
    items: ["Snapshoot6", "Snapshoot8"],
    link: ["/creative-layouts/Snapshoot6", "/creative-layouts/Snapshoot8"]
  },
};
