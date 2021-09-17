import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FaSearchLocation } from "react-icons/fa";

function SearchBar(props) {
  const { onSearch } = props;

  const handleInput = (e) => {
    const text = e.target.value;
    props.setSearchQuery(text);
    console.log("text", text);
  };

  return (
    <React.Fragment>
      <InputGroup className="mb-5 mx-auto " style={{ width: "40%" }}>
        <FormControl
          placeholder="Search a country..."
          onChange={handleInput}
          value={props.searchQuery}
          type="search"
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
