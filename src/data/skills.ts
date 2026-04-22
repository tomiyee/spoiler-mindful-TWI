import type { SkillData } from "../types";

export const SKILL_DATA = [
  {
    skillId: "basic-cleaning",
    skillName: "[Basic Cleaning]",
    skillColor: "#80cbc4",
    wikiLink: "https://wiki.wanderinginn.com/Basic_Cleaning",
    introducedAtChapterIndex: 0,
  },
  {
    skillId: "basic-cooking",
    skillName: "[Basic Cooking]",
    skillColor: "#ffcc80",
    wikiLink: "https://wiki.wanderinginn.com/Cooking_(skill)#Basic_Cooking",
    introducedAtChapterIndex: 0,
  },
  {
    skillId: "basic-crafting",
    skillName: "[Basic Crafting]",
    skillColor: "#ffcc80",
    wikiLink: "https://wiki.wanderinginn.com/Basic_Crafting",
    introducedAtChapterIndex: 6,
  },
  {
    skillId: "detect-poison",
    skillName: "[Detect Poison]",
    skillColor: "#a5d6a7",
    wikiLink: "https://wiki.wanderinginn.com/Detect_Poison",
    introducedAtChapterIndex: 7,
  },
  {
    skillId: "detect-guilt",
    skillName: "[Detect Guilt]",
    skillColor: "#ce93d8",
    wikiLink: "https://wiki.wanderinginn.com/Detect_Guilt",
    introducedAtChapterIndex: 9,
  },
] as const satisfies SkillData[];

export type SkillId = (typeof SKILL_DATA)[number]["skillId"];
