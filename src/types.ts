import type { ClassId } from "./data/classes";
import type { SkillId } from "./data/skills";
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

export type ChapterId = number;

export type Revision<T> = {
  value: T;
  chapterId: ChapterId;
};

// Revisions must be sorted in ascending chapterId order.
export type RevisionSeries<T> = Revision<T>[];

export type CharacterClassEntry = {
  classId: ClassId;
  level: string | undefined;
};

export type CharacterData = {
  characterId: string;
  name: string;
  introducedAtChapterIndex: number;
  imageUrls: string[];
  classes: RevisionSeries<CharacterClassEntry[]>;
  skills: RevisionSeries<SkillId[]>;
  occupations: RevisionSeries<string[]>;
  residences: RevisionSeries<string[]>;
};
