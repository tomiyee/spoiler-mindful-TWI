import type { CharacterData } from "../types";

export const CHARACTER_DATA: CharacterData[] = [
  {
    characterId: "erin-solstice",
    name: "Erin Solstice",
    introducedAtChapterIndex: 0,
    imageUrls: [],
    classes: [
      { chapterId: 0, value: [{ classId: "innkeeper", level: "1" }] },
      { chapterId: 4, value: [{ classId: "innkeeper", level: "4" }] },
    ],
    skills: [
      { chapterId: 0, value: ["basic-cooking", "basic-cleaning"] },
    ],
    occupations: [],
    residences: [
      { chapterId: 0, value: ["an abandoned inn"] },
    ],
  },
];
