import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { CHARACTER_DATA } from "../data/characters";
import { CLASS_DATA } from "../data/classes";
import { SKILL_DATA } from "../data/skills";
import { useSelectedChapter } from "../hooks/useSelectedChapter";
import type { RevisionSeries } from "../types";

function resolveAtChapter<T>(series: RevisionSeries<T>, maxChapterId: number): T | undefined {
  let lo = 0, hi = series.length - 1, result = -1;
  while (lo <= hi) {
    const mid = (lo + hi) >>> 1;
    if (series[mid].chapterId <= maxChapterId) {
      result = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return result >= 0 ? series[result].value : undefined;
}

export function CharactersPage() {
  const [selectedChapter] = useSelectedChapter();
  const maxIndex = selectedChapter?.chapterIndex ?? Infinity;

  const visible = CHARACTER_DATA.filter((c) => c.introducedAtChapterIndex <= maxIndex);

  return (
    <Box sx={{ px: 4, py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Characters
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        {selectedChapter
          ? `Showing characters introduced up to chapter ${selectedChapter.chapterName}.`
          : "Showing all characters. Select a chapter in the navbar to filter by spoilers."}
      </Typography>

      {visible.length === 0 ? (
        <Typography color="text.secondary">No characters introduced yet.</Typography>
      ) : (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
          {visible.map((character) => {
            const classes = resolveAtChapter(character.classes, maxIndex) ?? [];
            const skills = resolveAtChapter(character.skills, maxIndex) ?? [];
            const occupations = resolveAtChapter(character.occupations, maxIndex) ?? [];
            const residences = resolveAtChapter(character.residences, maxIndex) ?? [];

            return (
              <Card key={character.characterId} variant="outlined" sx={{ width: 320 }}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                    <Avatar
                      src={character.imageUrls[0]}
                      alt={character.name}
                      sx={{ width: 56, height: 56 }}
                    />
                    <Typography variant="h6">{character.name}</Typography>
                  </Box>

                  {classes.length > 0 && (
                    <Box sx={{ mb: 1.5 }}>
                      <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 0.5 }}>
                        Classes
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {classes.map((entry) => {
                          const classData = CLASS_DATA.find((c) => c.classId === entry.classId);
                          const label = classData
                            ? entry.level
                              ? `${classData.className} Lv. ${entry.level}`
                              : classData.className
                            : entry.classId;
                          return (
                            <Chip
                              key={entry.classId}
                              label={label}
                              size="small"
                              sx={{
                                bgcolor: "primary.main",
                                color: "primary.contrastText",
                                fontWeight: 600,
                                fontFamily: "monospace",
                              }}
                            />
                          );
                        })}
                      </Box>
                    </Box>
                  )}

                  {skills.length > 0 && (
                    <Box sx={{ mb: 1.5 }}>
                      <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 0.5 }}>
                        Skills
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {skills.map((skillId) => {
                          const skillData = SKILL_DATA.find((s) => s.skillId === skillId);
                          return (
                            <Chip
                              key={skillId}
                              label={skillData?.skillName ?? skillId}
                              size="small"
                              sx={{
                                bgcolor: skillData?.skillColor ?? "grey.400",
                                color: "#000",
                                fontWeight: 600,
                                fontFamily: "monospace",
                              }}
                            />
                          );
                        })}
                      </Box>
                    </Box>
                  )}

                  {occupations.length > 0 && (
                    <Box sx={{ mb: 1.5 }}>
                      <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 0.5 }}>
                        Occupation
                      </Typography>
                      <Typography variant="body2">{occupations.join(", ")}</Typography>
                    </Box>
                  )}

                  {residences.length > 0 && (
                    <Box>
                      <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 0.5 }}>
                        Residence
                      </Typography>
                      <Typography variant="body2">{residences.join(", ")}</Typography>
                    </Box>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </Box>
      )}
    </Box>
  );
}
