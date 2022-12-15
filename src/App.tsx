import { Grid, Box } from "@mui/material";
import FeedBar from "./components/FeedBar";
import LeftBar from "./components/LeftBar";
import TopBar from "./components/TopBar";
import { useRef, useState, useEffect } from "react";


function App() {
  const ref = useRef<HTMLElement>(null)
  const [width, setWidth] = useState<number | null>(null)

  useEffect(() => {
    setWidth(ref.current ? ref.current.offsetWidth : 0)
  }, [ref.current]);
  return (
    <div className="App">

      <TopBar />
      <Grid container >
        <Grid item sx={{ display: { xs: "none", sm: "flex" } }} sm={3} md={2}>
          <Box width="100%" ref={ref}>
            <LeftBar width={width!} />
          </Box>

        </Grid>
        <Grid item xs={12} sm={6} md={7} sx={{ bgcolor: "grey" }}><FeedBar /> </Grid>
        <Grid item sx={{ bgcolor: "purple", display: { xs: "none", sm: "flex" } }} sm={3} > 3</Grid >
      </Grid >
    </div >
  );
}

export default App;
