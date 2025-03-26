import { Box, Container, Typography } from "@mui/material"
import { styled } from "@mui/system"
import { menuItems } from "../data/data"

const StyledContainer = styled(Container)(({ theme }) => ({
  height: "100vh",
  position: "sticky",
  top: 0,
  color: "#444",
  backgroundColor: "none",
  borderRight: "1px solid rgba(236, 231, 231, 0.8)",
  paddingTop: 95,
  [theme.breakpoints.down("sm")]: {
    color: "white",
    backgroundColor: "#0082FF",
    paddingTop: 75,
  },
}))

const StyledItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 7,
  marginBottom: 26,
  cursor: "pointer",
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
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}))

const LeftBar = () => {
  return <>
    <StyledContainer>
      {menuItems.map((oneItem, index) => {
        const { icon, text } = oneItem
        return <StyledItem key={index}>
          <StyledIcon as={icon} />
          <StyledText>{text}</StyledText>
        </StyledItem>
      })}
    </StyledContainer>
  </>
}

export default LeftBar