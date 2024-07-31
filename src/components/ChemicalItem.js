import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { deleteItem, setIsEdit } from '../redux/chemicalSlice';

export default function ChemicalItem(props) {
    const {chemical}=props;
    const dispatch = useDispatch();
    const handle_delete=(id)=>{
        dispatch(deleteItem(id))
    }
    const handle_update = (id) =>{
        dispatch(setIsEdit({flag: true, id}))
    }
  return (
    <tr key={chemical.id}>
        <td>{chemical.id}</td>
        <td>{chemical.name}</td>
        <td>{chemical.formula}</td>
        <td>
            <Button color="danger" onClick={()=>handle_delete(chemical.id)} className='me-2'>Delete</Button>
            <Button color="info" onClick={()=>handle_update(chemical.id)}>Update</Button>
        </td>
    </tr>
  )
}
