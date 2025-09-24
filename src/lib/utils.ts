// import { clsx, type ClassValue } from "clsx";
// import { twMerge } from "tailwind-merge";

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// export type LayoutType = "3strip" | "4strip" | "square" | "wide" | "snapshoot6" | "snapshoot8";

// export interface MediaDeviceInfoExtended extends MediaDeviceInfo {
//   deviceId: string;
//   label: string;
// }

// export type PolaroidPropsType = {
//   judul: string;
//   children?: React.ReactNode;
// };

// export type TitleForPagePropsType = {
//   header: string;
//   category?: string;
//   subHeader?: string[];
// };

// export type CustomPagePropsType = {
//   header: string;
//   subHeader?: string[];
//   children?: React.ReactNode;
// };

// // 🔥 mapping snapshot → layout
// export const creativeLayoutsData: Record<
//   string,
//   { header: string; subHeader: string[] }
// > = {
//   "Snapshot 6": {
//     header: "Snapshot 6",
//     subHeader: ["Deskripsi snapshot 6", "Sub informasi lainnya untuk snapshot 6"],
//   },
//   "Snapshot 8": {
//     header: "Snapshot 8",
//     subHeader: ["Deskripsi snapshot 8", "Sub informasi lainnya untuk snapshot 8"],
//   },
// };

// // 🔥 fungsi untuk dapatkan config layout dari URL param
// // export function getLayoutFromType(type: string) {
// //   // cek lowercase tanpa spasi
// //   const t = type.toLowerCase().replace(/\s/g, "");

// //   if (t.includes("snapshoot6")) {
// //     return {
// //       layout: "snapshoot6" as LayoutType,
// //       maxPhotos: 6,
// //       width: 500,
// //       height: 500,
// //     };
// //   }
// //   if (t.includes("snapshoot8")) {
// //     return {
// //       layout: "snapshoot8" as LayoutType,
// //       maxPhotos: 8,
// //       width: 500,
// //       height: 500,
// //     };
// //   }
// //   if (t.includes("3strip")) {
// //     return {
// //       layout: "3strip" as LayoutType,
// //       maxPhotos: 3,
// //       width: 800,
// //       height: 1600,
// //     };
// //   }
// //   if (t.includes("4strip")) {
// //     return {
// //       layout: "4strip" as LayoutType,
// //       maxPhotos: 3,
// //       width: 800,
// //       height: 1600,
// //     };
// //   }

// //   // fallback
// //   return {
// //     layout: "square" as LayoutType,
// //     maxPhotos: 1,
// //     width: 800,
// //     height: 800,
// //   };
// // }


// export function getLayoutFromType(type: string) {
//   const t = type.toLowerCase().replace(/\s/g, "");

//   if (t.includes("snapshoot6")) {
//     return {
//       layout: "snapshoot6" as LayoutType,
//       maxPhotos: 6,
//       cols: 2,          // jumlah kolom
//       width: 800,
//       height: 1200,
//     };
//   }
//   if (t.includes("snapshoot8")) {
//     return {
//       layout: "snapshoot8" as LayoutType,
//       maxPhotos: 8,
//       cols: 2,
//       width: 800,
//       height: 1600,
//     };
//   }
//   // default layout lain
//   return {
//     layout: "square" as LayoutType,
//     maxPhotos: 1,
//     cols: 1,
//     width: 800,
//     height: 800,
//   };
// }


import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type LayoutType =
  | "3strip"
  | "4strip"
  | "square"
  | "wide"
  | "snapshoot6"
  | "snapshoot8";

export interface MediaDeviceInfoExtended extends MediaDeviceInfo {
  deviceId: string;
  label: string;
}

// 🔥 fungsi untuk dapatkan config layout dari URL param
export function getLayoutFromType(type: string) {
  // cek lowercase tanpa spasi
  const t = type.toLowerCase().replace(/\s/g, "");

  if (t.includes("snapshoot6")) {
    return {
      layout: "snapshoot6" as LayoutType,
      maxPhotos: 6,
      cols: 2,
      width: 800,
      height: 1200,
    };
  }
  if (t.includes("snapshoot8")) {
    return {
      layout: "snapshoot8" as LayoutType,
      maxPhotos: 8,
      cols: 2,
      width: 800,
      height: 1600,
    };
  }

  // fallback
  return {
    layout: "square" as LayoutType,
    maxPhotos: 1,
    cols: 1,
    width: 800,
    height: 800,
  };
}
