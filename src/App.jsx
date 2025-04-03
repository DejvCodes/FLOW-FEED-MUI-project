import NavBar from "./components/NavBar"
import LeftBar from "./components/LeftBar"
import Feed from "./components/Feed"
import RightBar from "./components/RightBar"
import Add from "./components/Add"
import { createTheme, CssBaseline } from "@mui/material"
import Grid from "@mui/material/Grid"
import { ThemeProvider } from "@mui/material/styles"
import { createContext, useState } from "react"

// Create a DarkModeContext
export const DarkModeContext = createContext()

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const theme = createTheme({ 
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  })

  return <>
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar /> {/* Navigation */}

        {/* Main Content */}
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

        <Add /> {/* Add Button */}
      </ThemeProvider>
    </DarkModeContext.Provider>
  </>
}

export default App