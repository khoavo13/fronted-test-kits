import React from "react";
import { useSelector } from "react-redux";
import { Container, Table } from "reactstrap";
import ChemicalItem from "./ChemicalItem";
import AddChemical from "./AddChemical";
import SearchBar from "./SearchBar";
import EditChemical from "./EditChemical";


export default function ChemicalApp() {
  const { chemicals, searchName, isEdit } = useSelector(
    (state) => state.chemicals
  );
  const filterBySearchName = (list) => {
    console.log(searchName);
    return list.filter((item) => item.name.includes(searchName));
  };
  return (
    <Container>
      <AddChemical />
      <SearchBar />
      <h3 className="text-center mt-5">Chemical List</h3>
      <Table hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Formula</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filterBySearchName(chemicals).map((item) => (
            <ChemicalItem chemical={item} />
          ))}
        </tbody>
      </Table>
      {isEdit ? <div className="edit-item">
        <EditChemical/>
      </div> : <></>}
    </Container>
  );
}
