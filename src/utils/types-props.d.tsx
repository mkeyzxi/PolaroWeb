export type LayoutType = "3strip" | "4strip" | "square" | "wide";
export interface MediaDeviceInfoExtended extends MediaDeviceInfo {
  deviceId: string;
  label: string;
}