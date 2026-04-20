import type { VolumeData } from "../types";

export const Volume = {
  Vol1: "vol-1",
  Vol2: "vol-2",
  Vol3: "vol-3",
  Vol4: "vol-4",
  Vol5: "vol-5",
  Vol6: "vol-6",
  Vol7: "vol-7",
  Vol8: "vol-8",
  Vol9: "vol-9",
  Vol10: "vol-10",
} as const;

export type Volume = (typeof Volume)[keyof typeof Volume];

export const VOLUME_DATA: Record<Volume, VolumeData> = {
  [Volume.Vol1]: { volumeId: Volume.Vol1, name: "Volume 1" },
  [Volume.Vol2]: { volumeId: Volume.Vol2, name: "Volume 2" },
  [Volume.Vol3]: { volumeId: Volume.Vol3, name: "Volume 3" },
  [Volume.Vol4]: { volumeId: Volume.Vol4, name: "Volume 4" },
  [Volume.Vol5]: { volumeId: Volume.Vol5, name: "Volume 5" },
  [Volume.Vol6]: { volumeId: Volume.Vol6, name: "Volume 6" },
  [Volume.Vol7]: { volumeId: Volume.Vol7, name: "Volume 7" },
  [Volume.Vol8]: { volumeId: Volume.Vol8, name: "Volume 8" },
  [Volume.Vol9]: { volumeId: Volume.Vol9, name: "Volume 9" },
  [Volume.Vol10]: { volumeId: Volume.Vol10, name: "Volume 10" },
};
