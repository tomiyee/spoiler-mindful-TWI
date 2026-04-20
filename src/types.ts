import type { Volume } from "./data/volumes";

export type ChapterData = {
  chapterIndex: number;
  chapterLink: string;
  chapterName: string;
  volumeId: Volume;
};

export type VolumeData = {
  volumeId: Volume;
  name: string;
};
