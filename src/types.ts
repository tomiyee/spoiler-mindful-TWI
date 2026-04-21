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

export type SkillData = {
  skillId: string;
  skillName: string;
  skillColor: string;
  wikiLink: string;
  introducedAtChapterIndex: number;
};

export type ClassData = {
  classId: string;
  className: string;
  introducedAtChapterIndex: number;
};
