import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "reactstrap";
import { setSearchName } from "../redux/chemicalSlice";
import './searchBar.css'

export default function SearchBar() {
  const [name, setName] = useState("");
    const dispatch = useDispatch()
  return (
    <div className="search-bar">
      <h3 className="text-center">Search Bar</h3>
      <Input
        type="text"
        placeholder="Search by Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            dispatch(setSearchName(name.trim()))
         setName("")
          }
        }}
      />
    </div>
  );
}
