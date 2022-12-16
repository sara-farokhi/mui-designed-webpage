import { Grid, Box, PaletteMode } from "@mui/material";
import FeedBar from "./components/FeedBar";
import LeftBar from "./components/LeftBar";
import TopBar from "./components/TopBar";
import AddPost from "./components/AddPost";
import { useRef, useState, useEffect } from "react";
import RightBar from "./components/RightBar";
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {
  const ref = useRef<HTMLElement>(null)
  const [width, setWidth] = useState<number | null>(null)
  const [mode, setMode] = useState<PaletteMode | undefined>("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });


  useEffect(() => {
    setWidth(ref.current ? ref.current.offsetWidth : 0)
  }, [ref.current]);
  return (
    <ThemeProvider theme={theme}>

      <Box bgcolor={"background.default"} color={"text.primary"}>
        <TopBar />
        <Grid container >
          <Grid item sx={{ display: { xs: "none", sm: "flex" } }} sm={3} md={2}>
            <Box width="100%" ref={ref}>
              <LeftBar
                width={width!}
                mode={mode}
                setMode={setMode}
              />
              {/* porps: propsType */}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={7}><FeedBar /> </Grid>
          <Grid item sx={{ display: { xs: "none", sm: "flex" } }} sm={3} >
            <RightBar />
          </Grid >
          <AddPost />
        </Grid >
      </Box>
    </ThemeProvider>

  );
}

export default App;
