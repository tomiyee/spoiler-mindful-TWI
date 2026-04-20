import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { NavBar } from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
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
    </>
  );
}

export default App;
