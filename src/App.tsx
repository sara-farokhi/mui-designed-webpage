import { Grid } from "@mui/material";
import LeftBar from "./components/LeftBar";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Grid container >
        <Grid item sx={{ display: { xs: "none", sm: "flex" } }} sm={3} md={2}>
          <LeftBar />
        </Grid>
        <Grid item sx={{ bgcolor: "coral", height: "3000px" }} xs={12} sm={6} md={7} >2 </Grid>
        <Grid item sx={{ bgcolor: "blue", display: { xs: "none", sm: "flex" } }} sm={3} > 3</Grid >
      </Grid >
    </div >
  );
}

export default App;
