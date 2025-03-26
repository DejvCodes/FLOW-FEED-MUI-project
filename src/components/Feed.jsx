import { Container } from "@mui/material"
import { styled } from "@mui/system"
import { posts } from "../data/data"
import Post from "./Post"

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: 100,
  [theme.breakpoints.down("sm")]: {
    paddingTop: 80,
  },
}))

const Feed = () => {
  return <>
    <StyledContainer>
      {posts.map((onePost, index) => {
        return <Post key={index} {...onePost} />
      })}
    </StyledContainer>
  </>
}

export default Feed