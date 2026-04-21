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

export type ChapterScoped<T> = Partial<Record<number, T>>;

export type CharacterClassEntry = {
  classId: ClassId;
  level: string | undefined;
};

export type CharacterData = {
  characterId: string;
  name: string;
  introducedAtChapterIndex: number;
  imageUrls: string[];
  classes: ChapterScoped<CharacterClassEntry[]>;
  skills: ChapterScoped<SkillId[]>;
  occupations: ChapterScoped<string[]>;
  residences: ChapterScoped<string[]>;
};
