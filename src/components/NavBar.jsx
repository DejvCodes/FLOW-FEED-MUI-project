import { Cancel, Mail, Notifications, Search } from "@mui/icons-material"
import { AppBar, Avatar, Badge, Box, InputBase, Toolbar, Typography } from "@mui/material"
import { styled } from "@mui/system"
import avatar from "../images/Navbar/avatar.webp"
import { useState } from "react"

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  color: "white",
  backgroundColor: theme.palette.mode === "dark" ? "#222" : "#0082FF",
  paddingInline: 7,
  boxShadow: "0 5px 4px rgba(0, 0, 0, 0.2)",
}))

const StyledSearchBox = styled(Box)(({ theme, open }) => ({
  width: "55%",
  display: "flex",
  alignItems: "center",
  backgroundColor: "rgba(255, 255, 255, 0.35)",
  transition: "all 0.1s linear",
  padding: "3px 7px",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.45)",
  },
  [theme.breakpoints.down("md")]: {
    width: "47%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "53%",
    display: open ? "flex" : "none",
  },
}))

const StyledInput = styled(InputBase)({
  width: "100%",
  marginLeft: 5,
})

const StyledCancelButton = styled(Cancel)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}))

const StyledIconBox = styled(Box)(({ theme, open }) => ({
  display: "flex",
  alignItems: "center",
  gap: 11,
  [theme.breakpoints.down("sm")]: {
    display: open ? "none" : "flex",
  },
}))

const StyledSearchButton = styled(Search)(({ theme, open }) => ({
  fontSize: "26px",
  [theme.breakpoints.up("sm")]: {
    display: open ? "block" : "none",
  },
}))

const NavBar = () => {
  const [open, setOpen] = useState(false)

  return <>
    <AppBar position="fixed">
      <StyledToolBar>
        <Typography variant="h5">FLOW FEED</Typography>

        <StyledSearchBox open={open}>
          <Search sx={{ fontSize: "26px", cursor: "pointer" }} />
          <StyledInput placeholder="Search..." />
          <StyledCancelButton onClick={() => setOpen(false)} sx={{
            fontSize: "26px",
          }} />
        </StyledSearchBox>

        <StyledIconBox open={open}>
          <StyledSearchButton onClick={() => setOpen(true)} />
          <Badge badgeContent={7} color="error" sx={{ cursor: "pointer" }}>
            <Mail color="white" />
          </Badge>
          <Badge badgeContent={2} color="error" sx={{ cursor: "pointer" }}>
            <Notifications color="white" />
          </Badge>
          <Avatar src={avatar} sx={{ width: 30, height: 30, marginLeft: 0.7, cursor: "pointer" }} />
        </StyledIconBox>
      </StyledToolBar>
    </AppBar>
  </>
}

export default NavBar