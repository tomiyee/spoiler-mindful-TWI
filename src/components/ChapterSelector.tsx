import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { CHAPTER_DATA } from "../data/chapters";
import { VOLUME_DATA } from "../data/volumes";
import { useSelectedChapter } from "../hooks/useSelectedChapter";

const options = CHAPTER_DATA.slice().sort((a, b) => {
  const volCmp = a.volumeId.localeCompare(b.volumeId, undefined, {
    numeric: true,
  });
  return volCmp !== 0 ? volCmp : a.chapterIndex - b.chapterIndex;
});

export function ChapterSelector() {
  const [value, setValue] = useSelectedChapter();

  return (
    <Autocomplete
      options={options}
      value={value}
      onChange={(_, newValue) => setValue(newValue)}
      getOptionLabel={(option) => option.chapterName}
      groupBy={(option) => VOLUME_DATA[option.volumeId].name}
      renderInput={(params) => <TextField {...params} label="Chapter" />}
    />
  );
}
