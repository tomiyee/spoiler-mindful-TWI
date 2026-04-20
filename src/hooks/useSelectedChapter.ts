import type { ChapterData } from "../types";
import { usePersistedState } from "./usePersistedState";

export function useSelectedChapter() {
  return usePersistedState<ChapterData | null>({
    key: "selected-chapter",
    default: null,
  });
}
