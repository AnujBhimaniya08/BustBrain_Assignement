import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContentText from "@mui/material/DialogContentText";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
const Dialogbox = () => {
  const [openPermission, setOpenPermission] = useState(true);
  function handleClose() {
    setOpenPermission(false);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // const formJson = Object.fromEntries(formData.entries());
  }
  useEffect(() => {
    function renderingThisComp() {
      setOpenPermission(true);
    }
    renderingThisComp();
  }, []);
  return (
    <Dialog open={openPermission} onClose={handleClose}>
      <DialogTitle>Create form</DialogTitle>
      <DialogContent>
        <DialogContentText>Select base</DialogContentText>
        <form onSubmit={handleSubmit}>
          <input
            type="list"
            list="baseList"
            name="base"
            placeholder="select base of your choice"
          />
          <datalist id="baseList">
            <option>base 1</option>
            <option> base 2</option>
          </datalist>
        </form>
        <DialogContentText>Select table</DialogContentText>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="table 1" />
          <FormControlLabel control={<Checkbox />} label="table 1" />
          <FormControlLabel control={<Checkbox />} label="table 1" />
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <button onClose={handleClose}>Cancel</button>
        <button>Create form</button>
      </DialogActions>
    </Dialog>
  );
};

export default Dialogbox;
