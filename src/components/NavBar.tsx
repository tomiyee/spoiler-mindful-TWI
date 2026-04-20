import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { lazy, Suspense } from "react";

const ChapterSelector = lazy(() =>
  import("./ChapterSelector").then((m) => ({ default: m.ChapterSelector }))
);

export function NavBar() {
  return (
    <AppBar
      position="static"
      sx={{
        position: "relative",
        left: "50%",
        right: "50%",
        ml: "-50vw",
        mr: "-50vw",
        width: "100vw",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 0, mr: "auto" }}>
          Spoiler Mindful TWI
        </Typography>
        <Box sx={{ width: 300 }}>
          <Suspense fallback={<Box sx={{ width: 300 }} />}>
            <ChapterSelector />
          </Suspense>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
