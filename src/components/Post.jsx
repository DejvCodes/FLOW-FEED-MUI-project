import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

const Post = ({ image, title, text }) => {
  return <Card sx={{ marginBottom: 4 }}>
    <CardActionArea>
      <CardMedia
        image={image}
        sx={{
          height: { xs: 170, sm: 270, md: 320 },
          objectFit: "cover"
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{title}</Typography>
        <Typography variant="body2">{text}</Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">Share</Button>
      <Button size="small" color="primary">Read More</Button>
    </CardActions>
  </Card>
}

export default Post