import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { setIsEdit, updateItem } from '../redux/chemicalSlice';

export default function EditChemical() {
    const {editItem} = useSelector(state=>state.chemicals)
    const [name, setName] = useState(editItem.name);
    const [fomula, setFomula] = useState(editItem.formula);
    const dispatch=useDispatch()
    const handle_edit = (e) => {
        e.preventDefault();
        dispatch(
            updateItem({...editItem, name: name, formula: fomula})
        );
        dispatch(setIsEdit({flag: false, id: editItem.id}))
      };
  return (
    <div>
        <h3 className='text-center'>Edit Item</h3>
        <Form onSubmit={e=>handle_edit(e)}>
          <FormGroup>
            <Label for="name-chemical">Name</Label>
            <Input
              id="name-edit"
              placeholder="Enter name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="fomula-chemical">Formula</Label>
            <Input
              id="fomula-edit"
              placeholder="Enter fomula"
              type="text"
              value={fomula}
              onChange={(e) => setFomula(e.target.value)}
            />
          </FormGroup>
          <Button color="info" type="submit" >
            Edit
          </Button>
        </Form>
    </div>
  )
}
