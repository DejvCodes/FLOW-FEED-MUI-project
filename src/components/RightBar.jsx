import { Container } from "@mui/material"
import { styled } from "@mui/system"

const StyledContainer = styled(Container)(({ theme }) => ({
  height: "100vh",
  position: "sticky",
  top: 0,
  paddingTop: 100,
  borderLeft: "1px solid rgba(236, 231, 231, 0.8)",
  [theme.breakpoints.down("sm")]: {
    paddingTop: 80,
  },
}))

const RightBar = () => {
  return <>
    <StyledContainer>
      RightBar
    </StyledContainer>
  </>
}

export default RightBar