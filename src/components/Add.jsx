import { Alert, Box, Button, Container, Fab, FormControl, FormControlLabel, FormLabel, InputLabel } from "@mui/material"
import { MenuItem, Modal, Radio, RadioGroup, Select, Snackbar, TextField, Tooltip } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import { styled } from "@mui/system"
import { useState } from "react"

const StyledFab = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: 10,
  right: 10,
  color: "white",
  backgroundColor: theme.palette.mode === "dark" ? "#555" : "#0082FF",
  "&:hover": {
    backgroundColor: theme.palette.mode === "dark" ? "#777" : "#004AB5",
  }
}))

const StyledContainer = styled(Container)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 500,
  backgroundColor: theme.palette.mode === "dark" ? "#222" : "#fff",
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
  const [visibility, setVisibility] = useState("Public")

  const handleAlertOpen = () => {
    setOpenAlert(true)
  }
  const handleAlertClose = () => {
    setOpenAlert(false)
  }

  return <>
    <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
      <StyledFab>
        <AddIcon />
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
              value={visibility}
              onChange={(e) => setVisibility(e.target.value)}
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
            <FormLabel component="legend">Who can comment?</FormLabel>
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
              onClick={handleAlertOpen}
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


    <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleAlertClose}>
      <Alert
        onClose={handleAlertClose}
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