import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { addItem } from "../redux/chemicalSlice";
import "./addChemical.css"

export default function AddChemical() {
  const [name, setName] = useState("");
  const [fomula, setFomula] = useState("");
  const dispatch = useDispatch();
  const handle_add = (e) => {
    e.preventDefault();

    dispatch(
      addItem({
        name: document.getElementById("name-chemical").value,
        formula: document.getElementById("fomula-chemical").value,
      })
    );

    setName("");
    setFomula("");
  };
  return (
    <div className="form-add">
      <h3 className="text-center">Add Chemical</h3>
      <div>
        <Form onSubmit={(e) => handle_add(e)} >
          <FormGroup>
            <Label for="name-chemical">Name</Label>
            <Input
              id="name-chemical"
              placeholder="Enter name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="fomula-chemical">Formula</Label>
            <Input
              id="fomula-chemical"
              placeholder="Enter fomula"
              type="text"
              value={fomula}
              onChange={(e) => setFomula(e.target.value)}
            />
          </FormGroup>
          <Button color="info" type="submit">
            Add
          </Button>
        </Form>
      </div>
    </div>
  );
}
