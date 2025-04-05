import { Avatar, AvatarGroup, Container, ImageList, ImageListItem, Link, Typography } from "@mui/material"
import { styled } from "@mui/system"

import { avatars } from "../data/data"
import { gallery } from "../data/data"

const StyledContainer = styled(Container)(({ theme }) => ({
  height: "100vh",
  position: "sticky",
  top: 0,
  paddingTop: 100,
  borderLeft: theme.palette.mode === "dark" ? "2px solid rgba(61, 61, 61, 0.7)" : "2px solid rgba(236, 231, 231, 0.7)",
  [theme.breakpoints.down("sm")]: {
    paddingTop: 80,
  },
}))

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: "bold",
  color: theme.palette.mode === "dark" ? "#E1E5EB" : "#444",
}))

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#E1E5EB" : "#444",
  fontSize: 16,
  marginRight: 14,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}))

const RightBar = () => {
  return <StyledContainer>
    <StyledTypography gutterBottom>
      Online Friends
    </StyledTypography>

    <AvatarGroup total={6} sx={{ justifyContent: "flex-end", marginBottom: 2 }}>
      {avatars.map((oneAvatar, index) => {
        const { alt, img } = oneAvatar
        return <Avatar key={index} alt={alt} src={img} />
      })}
    </AvatarGroup>

    <StyledTypography gutterBottom>
      Gallery
    </StyledTypography>

    <ImageList cols={3} sx={{ marginBottom: 2 }}>
      {gallery.map((item, index) => (
        <ImageListItem key={index}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>

    <StyledTypography gutterBottom>
      Categories
    </StyledTypography>

    <StyledLink href="#" variant="body2">Sport</StyledLink>
    <StyledLink href="#" variant="body2">Food</StyledLink>
    <StyledLink href="#" variant="body2">Movie</StyledLink>
    <StyledLink href="#" variant="body2">Science</StyledLink>
  </StyledContainer>
}

export default RightBar