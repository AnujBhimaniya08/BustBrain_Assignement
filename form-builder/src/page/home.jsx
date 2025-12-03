import React, { Suspense, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import AddFormIcon from "../components/addFormIcon";
import creatingForm from "../hooks/creatingForm";
import Dialog from "@mui/material/Dialog";
import Dialogbox from "../components/dialogbox";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import GetBaseArray from "../hooks/getbaseArray";
import getTablesArray from "../hooks/getTablesArray";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Skeleton from "@mui/material/Skeleton";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import { handleSubmit } from "../utils/handleSubmit";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FormResponses from "../components/formResponses";
const Home = () => {
  const [dialogFormCreation, setdialogFormCreation] = useState(false);
  const [basesArray, setBaseArray] = useState([]);
  const [tableArray, settableArray] = useState([]);
  const [index, setIndex] = useState(0);
  const [flag, setFlag] = useState(false);
  const [base, setBase] = useState("");
  const [radioTableID, setRadioTableID] = useState("");
  const [selectedTable, setSelectedTable] = useState(null);
  const navigate = useNavigate();
  function handleClose() {
    setdialogFormCreation(false);
    setBase("");
  }
  const handleChange = (event) => {
    setBase(event.target.value);
  };

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     const formData = new FormData(event.currentTarget);
  //     // const formJson = Object.fromEntries(formData.entries());
  //   }
  useEffect(() => {
    async function initiateform() {
      const array = await GetBaseArray();
      const tables = await getTablesArray(index);
      if (array && array.length > 0) {
        console.log(array), setBaseArray(array);
      }
      if (tables && tables.length > 0) {
        console.log(tables), settableArray(tables);
        if (radioTableID !== "") {
          console.log(radioTableID);
          const table = tables.filter((item) => item.id === radioTableID);
          console.log(table);
          setSelectedTable(table);
        }
      }
    }
    initiateform();
  }, [dialogFormCreation, radioTableID, index]);
  useEffect(() => {
    if (flag) {
      console.log(selectedTable);
      navigate("/formCreation", { state: { table: selectedTable } });
    }
  }, [flag]);
  return (
    <>
      <div>
        <nav>
          <Navbar />
        </nav>
        <main>
          <div className="bg-gray-600 w-screen h-20"></div>
          <div className="my-3 w-21 rounded-full border- bg-white absolute top-18 left-11">
            <button
              className="cursor-pointer hover:scale-110 transition-all relative left-0.5"
              onClick={() => {
                setdialogFormCreation(true);
              }}
            >
              <AddFormIcon />
            </button>
          </div>
          <section className="mt-10 border-2 w-11/12 mx-auto ">
            <h1 className="text-3xl">Responses</h1>
            <div className="">{<FormResponses />}</div>
          </section>
        </main>
      </div>
      {dialogFormCreation ? (
        <Dialog open={dialogFormCreation} onClose={handleClose} className="">
          <DialogTitle>Create form</DialogTitle>
          <Suspense fallback={<Skeleton />}>
            <DialogContent>
              {/* <DialogContentText>Choose your base</DialogContentText> */}

              <FormControl className="p-2">
                <InputLabel>Select Base</InputLabel>{" "}
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={base}
                  label="Base"
                  onChange={handleChange}
                  className="w-50 my-2 "
                >
                  {basesArray.map((option, index) => (
                    <MenuItem
                      key={index}
                      value={option.name}
                      onClick={() => {
                        setIndex(index);
                        setBase(option.name);
                      }}
                    >
                      {option.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>Select the Table</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      {tableArray.map((option, index) => {
                        return (
                          <FormControlLabel
                            key={index}
                            value={option.name}
                            control={<Radio />}
                            label={option.name}
                            onClick={() => setRadioTableID(option.id)}
                          />
                        );
                      })}
                    </RadioGroup>
                  </FormControl>
                </AccordionDetails>
              </Accordion>
            </DialogContent>
          </Suspense>

          <DialogActions>
            <button
              className="bg-blue-300 px-2 py-1 rounded-md border-1 "
              onClose={handleClose}
            >
              Cancel
            </button>
            <button
              className="bg-blue-300 px-2 py-1 rounded-md border-1 "
              onClick={() => {
                setFlag(true);
                handleSubmit(index, radioTableID);
              }}
            >
              {/* <Link to="/formCreation">Create form</Link> */}
              createForm
            </button>
          </DialogActions>
        </Dialog>
      ) : null}
    </>
  );
};

export default Home;
{
  /* <form onSubmit={handleSubmit}>
              <input
                type="list"
                list="baseList"
                name="base"
                className="border-2 border-dashed w-90"
                placeholder="select base of your choice"
              />
              <datalist id="baseList">
                <option>base 1</option>
                <option> base 2</option>
              </datalist>
            </form> */
}
{
  /* {tableArray ? <div></div> : null} */
}

{
  /* <FormControlLabel control={<Checkbox />} label="table 1" />
                  <FormControlLabel control={<Checkbox />} label="table 1" />
                  <FormControlLabel control={<Checkbox />} label="table 1" /> */
}
