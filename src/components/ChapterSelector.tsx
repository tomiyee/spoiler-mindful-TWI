import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import type { ChapterData } from "../types";
import { CHAPTER_DATA } from "../data/chapters";

const options = CHAPTER_DATA.slice().sort((a, b) => {
  const volCmp = a.volumeId.localeCompare(b.volumeId, undefined, {
    numeric: true,
  });
  return volCmp !== 0 ? volCmp : a.chapterIndex - b.chapterIndex;
});

export function ChapterSelector() {
  const [value, setValue] = useState<ChapterData | null>(null);

  return (
    <Autocomplete
      options={options}
      value={value}
      onChange={(_, newValue) => setValue(newValue)}
      getOptionLabel={(option) => option.chapterName}
      groupBy={(option) => option.volumeId}
      renderInput={(params) => <TextField {...params} label="Chapter" />}
    />
  );
}
