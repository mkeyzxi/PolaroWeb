export type LayoutType = "3strip" | "4strip" | "square" | "wide";

export interface MediaDeviceInfoExtended extends MediaDeviceInfo {
  deviceId: string;
  label: string;
}

export type PolaroidPropsType = {
  judul: string;
  children?: React.ReactNode;
};

export type TitleForPagePropsType = {
  header: string;
  category?: string;
  subHeader?: string[];
};

export type CustomPagePropsType = {
  header: string;
  subHeader?: string[];
  children?: React.ReactNode;
};
