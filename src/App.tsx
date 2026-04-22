import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { lazy, Suspense } from "react";
import "./App.css";

const SkillsPage = lazy(() =>
  import("./pages/SkillsPage").then((m) => ({ default: m.SkillsPage }))
);
const ClassesPage = lazy(() =>
  import("./pages/ClassesPage").then((m) => ({ default: m.ClassesPage }))
);
const CharactersPage = lazy(() =>
  import("./pages/CharactersPage").then((m) => ({ default: m.CharactersPage }))
);

function HomePage() {
  return (
    <Box sx={{ px: 4, py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Spoiler-Mindful TWI Wiki
      </Typography>
      <Typography variant="body1" color="text.secondary">
        The Wandering Inn is one of the longest web novels ever written — with
        millions of words across dozens of volumes, it can be hard to look
        anything up without stumbling into spoilers. This wiki shows you
        information that you should know up to a specific chapter.
      </Typography>
    </Box>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/characters" element={<CharactersPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
