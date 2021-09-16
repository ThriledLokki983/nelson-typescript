import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FaSearchLocation } from "react-icons/fa";

function SearchBar() {
  return (
    <React.Fragment>
      <InputGroup className="mb-5 mx-auto " style={{ width: "40%" }}>
        <FormControl
          placeholder="Go directly to a specific country"
          aria-label="Search bar"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">
          <FaSearchLocation />
        </InputGroup.Text>
      </InputGroup>
    </React.Fragment>
  );
}

export default SearchBar;
