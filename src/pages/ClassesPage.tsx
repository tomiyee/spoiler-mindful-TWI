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
import { CLASS_DATA } from "../data/classes";
import { CHAPTER_DATA } from "../data/chapters";
import { useSelectedChapter } from "../hooks/useSelectedChapter";

export function ClassesPage() {
  const [selectedChapter] = useSelectedChapter();

  const maxIndex = selectedChapter?.chapterIndex ?? Infinity;
  const visible = CLASS_DATA.filter((c) => c.introducedAtChapterIndex <= maxIndex);

  const chapterName = (index: number) =>
    CHAPTER_DATA.find((c) => c.chapterIndex === index)?.chapterName ?? `#${index}`;

  return (
    <Box sx={{ px: 4, py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Classes
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        {selectedChapter
          ? `Showing classes introduced up to chapter ${selectedChapter.chapterName}.`
          : "Showing all classes. Select a chapter in the navbar to filter by spoilers."}
      </Typography>

      {visible.length === 0 ? (
        <Typography color="text.secondary">No classes introduced yet.</Typography>
      ) : (
        <TableContainer component={Paper} variant="outlined">
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Class</TableCell>
                <TableCell>First Introduced</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visible.map((cls) => (
                <TableRow key={cls.classId} hover>
                  <TableCell>
                    <Chip
                      label={cls.className}
                      size="small"
                      sx={{
                        bgcolor: "primary.main",
                        color: "primary.contrastText",
                        fontWeight: 600,
                        fontFamily: "monospace",
                      }}
                    />
                  </TableCell>
                  <TableCell>{chapterName(cls.introducedAtChapterIndex)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
