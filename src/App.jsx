import Grid from "@mui/material/Grid"
import LeftBar from "./components/LeftBar"
import Feed from "./components/Feed"
import RightBar from "./components/RightBar"
import NavBar from "./components/NavBar"
import Add from "./components/Add"

const App = () => {
  return <>
    <NavBar />
    <Grid container>
      <Grid item md={1.8} sm={3} xs={1.9}>
        <LeftBar />
      </Grid>
      <Grid item md={7.5} sm={9} xs={10}>
        <Feed />
      </Grid>
      <Grid item md={2.7} sx={{ display: { xs: "none", md: "block" } }}>
        <RightBar />
      </Grid>
    </Grid>
    <Add />
  </>
}

export default App