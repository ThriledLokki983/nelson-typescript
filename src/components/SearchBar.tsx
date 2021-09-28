/** @format */

import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FaSearchLocation } from "react-icons/fa";
import { Container } from "./styles/SearchBar.style";

type SearchProps = {
	onSearch: string;
	handleSearchQuery: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function SearchBar({ onSearch, handleSearchQuery }: SearchProps) {
	return (
		<React.Fragment>
			<Container>
				<InputGroup className="mb-5 mx-auto " style={{ width: "40%" }}>
					<FormControl
						onChange={handleSearchQuery}
						value={onSearch}
						type="search"
						aria-label="Search bar"
						aria-describedby="basic-addon2"
						placeholder="hello..."
					/>
					<InputGroup.Text id="basic-addon2">
						<FaSearchLocation />
					</InputGroup.Text>
				</InputGroup>
			</Container>
		</React.Fragment>
	);
}

export default SearchBar;
