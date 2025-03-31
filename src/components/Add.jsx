import { Alert, Box, Button, Container, Fab, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Modal, Radio, RadioGroup, Select, Snackbar, TextField, Tooltip } from "@mui/material"
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

const StyledItem = styled(Box)(({ theme }) => ({
  marginBottom: 20,
}))

const Add = () => {
  const [open, setOpen] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)

  const handleOpen = () => {
    setOpenAlert(true)
  }
  const handleClose = () => {
    setOpenAlert(false)
  }

  return <>
    <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
      <StyledFab>
        <AddIcon></AddIcon>
      </StyledFab>
    </Tooltip>

    <Modal open={open}>
      <StyledContainer>
        <form autoComplete="off">
          <StyledItem>
            <TextField
              id="standard-basic"
              label="Title"
              variant="standard"
              size="small"
              sx={{ width: "100%" }}
            />
          </StyledItem>

          <StyledItem>
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              defaultValue="Tell your story..."
              multiline
              rows={3}
              size="small"
              sx={{ width: "100%" }}
            />
          </StyledItem>

          <FormControl variant="standard" sx={{ marginBottom: 2, minWidth: 100 }}>
            <InputLabel id="demo-simple-select-standard-label">Public</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Public"
            >
              <MenuItem value="Public">Public</MenuItem>
              <MenuItem value="Private">Private</MenuItem>
              <MenuItem value="Unlisted">Unlisted</MenuItem>
            </Select>
          </FormControl>

          <StyledItem>
            <FormLabel components="legend">Who can comment?</FormLabel>
            <RadioGroup>
              <FormControlLabel
                value="Everybody"
                control={<Radio size="small" />}
                label="Everybody"
              />
              <FormControlLabel
                value="My Friends"
                control={<Radio size="small" />}
                label="My Friends"
              />
              <FormControlLabel
                value="Nobody"
                control={<Radio size="small" />}
                label="Nobody"
              />
              <FormControlLabel
                value="Custom"
                disabled
                control={<Radio size="small" />}
                label="Custom (Premium)"
              />
            </RadioGroup>
          </StyledItem>

          <StyledItem>
            <Button
              variant="outlined"
              color="primary"
              sx={{ marginRight: 2 }}
              onClick={handleOpen}
            >
              Create
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </StyledItem>
        </form>
      </StyledContainer>
    </Modal>


    <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ width: '100%' }}
      >
        The post was successfully created!
      </Alert>
    </Snackbar>
  </>
}

export default Add