import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { lazy, Suspense } from "react";
import { Link as RouterLink } from "react-router-dom";

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
      <Toolbar sx={{ gap: 1 }}>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ flexGrow: 0, mr: 1, color: "inherit", textDecoration: "none" }}
        >
          Spoiler Mindful TWI
        </Typography>
        <Button color="inherit" component={RouterLink} to="/skills">
          Skills
        </Button>
        <Button color="inherit" component={RouterLink} to="/classes">
          Classes
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ width: 300 }}>
          <Suspense fallback={<Box sx={{ width: 300 }} />}>
            <ChapterSelector />
          </Suspense>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
