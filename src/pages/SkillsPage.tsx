import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { SKILL_DATA } from "../data/skills";
import { CHAPTER_DATA } from "../data/chapters";
import { useSelectedChapter } from "../hooks/useSelectedChapter";

export function SkillsPage() {
  const [selectedChapter] = useSelectedChapter();

  const maxIndex = selectedChapter?.chapterIndex ?? Infinity;
  const visible = SKILL_DATA.filter((s) => s.introducedAtChapterIndex <= maxIndex);

  const chapterName = (index: number) =>
    CHAPTER_DATA.find((c) => c.chapterIndex === index)?.chapterName ?? `#${index}`;

  return (
    <Box sx={{ px: 4, py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        {selectedChapter
          ? `Showing skills introduced up to chapter ${selectedChapter.chapterName}.`
          : "Showing all skills. Select a chapter in the navbar to filter by spoilers."}
      </Typography>

      {visible.length === 0 ? (
        <Typography color="text.secondary">No skills introduced yet.</Typography>
      ) : (
        <TableContainer component={Paper} variant="outlined">
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Skill</TableCell>
                <TableCell>First Introduced</TableCell>
                <TableCell>Wiki</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visible.map((skill) => (
                <TableRow key={skill.skillId} hover>
                  <TableCell>
                    <Chip
                      label={skill.skillName}
                      size="small"
                      sx={{
                        bgcolor: skill.skillColor,
                        color: "#000",
                        fontWeight: 600,
                        fontFamily: "monospace",
                      }}
                    />
                  </TableCell>
                  <TableCell>{chapterName(skill.introducedAtChapterIndex)}</TableCell>
                  <TableCell>
                    <Link href={skill.wikiLink} target="_blank" rel="noopener noreferrer">
                      Wiki
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
