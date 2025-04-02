import { Box, Container, Typography } from "@mui/material"
import { styled } from "@mui/system"
import { menuItems } from "../data/data"
import { DarkMode, LightMode } from "@mui/icons-material"
import { useContext } from "react"
import { DarkModeContext } from "../App"

const StyledContainer = styled(Container)(({ theme }) => ({
  height: "100vh",
  position: "sticky",
  top: 0,
  color: theme.palette.mode === "dark" ? "#E1E5EB" : "#444",
  backgroundColor: "none",
  borderRight: theme.palette.mode === "dark" ? "2px solid rgba(61, 61, 61, 0.7)" : "2px solid rgba(236, 231, 231, 0.7)",
  paddingTop: 95,
  [theme.breakpoints.down("sm")]: {
    color: "white",
    backgroundColor: theme.palette.mode === "dark" ? "#222" : "#0082FF",
    paddingTop: 75,
  },
}))

const StyledItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: 3,
  gap: 7,
  marginBottom: 5,
  padding: 10,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.mode === "dark" ? "rgba(61, 61, 61, 0.7)" : "rgba(236, 231, 231, 0.7)",
  },
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    gap: 0,
  },
}))

const StyledIcon = styled(Box)(({ theme }) => ({
  fontSize: "22px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "25px",
  },
}))

const StyledText = styled(Typography)(({ theme }) => ({
  display: "flex",
  fontSize: "18px",
  textTransform: "capitalize",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}))

const LeftBar = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext)

  return <>
    <StyledContainer>
      {menuItems.map((oneItem, index) => {
        const { icon, text } = oneItem
        return <StyledItem key={index}>
          <StyledIcon as={icon} />
          <StyledText>{text}</StyledText>
        </StyledItem>
      })}

      <StyledItem onClick={() => setDarkMode(!darkMode)}>
        {/* DarkMode Button */}
        <StyledIcon sx={{ display: "flex" }}>{darkMode ? <LightMode /> : <DarkMode />}</StyledIcon>
        <StyledText>{darkMode ? "Light" : "Dark"}</StyledText>
      </StyledItem>
    </StyledContainer>
  </>
}

export default LeftBar