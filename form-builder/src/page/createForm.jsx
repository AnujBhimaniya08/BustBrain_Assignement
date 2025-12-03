import React from "react";
import { useState } from "react";
import FieldCard from "../components/fieldCard";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useLocation, Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import DialogActions from "@mui/material/DialogActions";

const CreateForm = () => {
  const [dialogField, setDialogField] = useState(false);
  const [fieldOptionValue, setFieldOptionValue] = useState("");
  function createField() {
    console.log("going to create a field");
  }
  function handleClose() {
    setDialogField(false);
  }
  function handleChange(event) {
    setFieldOptionValue(event.target.value);
    console.log("another field will be created");
  }
  function handleAddField() {
    console.log("field created");
  }
  const location = useLocation();
  const { table } = location.state || {};
  console.log(table[0].fields);
  return (
    <>
      {" "}
      <div className="bg-gray-800 h-screen  py-2">
        <div className="bg-gray-200 relative top-7 rounded-lg  mx-auto w-6/12 h-11/12 overflow-scroll  ">
          <div className=" bg-gray-100 w-11/12 h-3/12 relative top-5 left-8 rounded-md">
            <img
              src="https://i.pcmag.com/imagery/reviews/06GdAglsVsGlkBgtUw4Dtwb-13..v1741201484.png"
              alt="image here"
              className="w-full h-full object-cover rounded-md"
            />{" "}
            {/**multer config here */}
          </div>
          <div className="mt-8">
            <h3></h3>
            <h1 className="text-4xl  ml-4">{table[0].name}</h1>
            <p className="text-lg ml-4">{table[0].description}</p>
          </div>

          <div className="mt-4">
            <div>
              {table
                ? table[0].fields.map((items, index) => (
                    <FieldCard key={index} items={items} />
                  ))
                : null}
            </div>
            <button
              className="bg-white relative left-80 bottom-2 rounded-full hover:scale-105 transition-all"
              onClick={() => {
                setDialogField(true);
                createField;
              }}
            >
              <AddCircleIcon color="primary" />
            </button>
          </div>
        </div>
      </div>
      {dialogField ? (
        <Dialog open={dialogField} onClose={handleClose}>
          <DialogTitle>Creating new field</DialogTitle>
          <DialogContent>
            <DialogContentText>Choose your data</DialogContentText>

            <TextField
              id="description"
              label="Description"
              variant="outlined"
            />

            <TextField id="name" label="Name" variant="outlined" />

            <FormControl fullWidth>
              <InputLabel id="options-select">Select Options</InputLabel>
              <Select
                labelId="options-select"
                id="options-select"
                value={fieldOptionValue}
                label="Options"
                onChange={handleChange}
              >
                <MenuItem value="short">Short Text </MenuItem>
                <MenuItem value="short">Long Text </MenuItem>
                <MenuItem value="short">single text </MenuItem>
                <MenuItem value="short">Multi select </MenuItem>
                <MenuItem value="short">Attachment </MenuItem>
              </Select>
            </FormControl>

            <TextField id="type" label="Type" variant="outlined" />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleAddField}>Add</Button>
          </DialogActions>
        </Dialog>
      ) : null}
    </>
  );
};

export default CreateForm;
