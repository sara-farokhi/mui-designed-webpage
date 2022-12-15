import { Grid } from "@mui/material";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Grid container >
        <Grid item sx={{ bgcolor: "pink", display: { xs: "none", sm: "flex" } }} sm={2}>1</Grid>
        <Grid item sx={{ bgcolor: "coral" }} xs={12} sm={7}>2 </Grid>
        <Grid item sx={{ bgcolor: "blue", display: { xs: "none", sm: "flex" } }} sm={3} > 3</Grid >
      </Grid >
    </div >
  );
}

export default App;
