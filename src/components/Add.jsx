import { Box, Container, Fab, Modal, TextField, Tooltip } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import { styled } from "@mui/system"
import { useState } from "react"

const StyledFab = styled(Fab)({
  position: "fixed",
  bottom: 10,
  right: 10,
  color: "white",
  backgroundColor: "#0082FF",
  "&:hover": {
    backgroundColor: "#004AB5",
  }
})

const StyledContainer = styled(Container)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 500,
  backgroundColor: "white",
  [theme.breakpoints.down("sm")]: {
    width: "100vw",
    height: "100vh",
  }
}))

const StyledForm = styled(Box)(({ theme }) => ({

}))

const Add = () => {
  const [open, setOpen] = useState(false)

  return <>
    <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
      <StyledFab>
        <AddIcon></AddIcon>
      </StyledFab>
    </Tooltip>

    <Modal open={open}>
      <StyledContainer>
        <StyledForm>
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </StyledForm>
      </StyledContainer>
    </Modal>
  </>
}

export default Add