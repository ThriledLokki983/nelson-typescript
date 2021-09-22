import React from "react";
import { Container } from "react-bootstrap";
import { insertCart } from "../redux/action";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { Image } from "react-bootstrap";
import useCountries from "../custom-hooks/useCountries";
import SearchBar from "./SearchBar";
import { RiHeartAddFill } from "react-icons/ri";
import { useState } from "react";
import { getSuggestedQuery } from "@testing-library/dom";
import { useDispatch, useSelector } from "react-redux";

function TableContent() {
  const [countries, data] = useCountries();
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  console.log("countries", countries);

  return (
    <Container>
      <SearchBar
        onSearch={countries}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
        placeholder="Enter a country name.."
      />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="cell-flag">Flag</th>
            <th>Name</th>
            <th>Capital</th>
            <th>Region</th>
            <th>Population</th>
            <th>Timezone</th>
            <th>Currency</th>
            <th>Language</th>
            <th className="cell-fav">Add To Favorites</th>
          </tr>
        </thead>
        <tbody>
          {countries
            .filter((country) =>
              country.name.toLowerCase().includes(searchQuery)
            )
            .map((country, key) => (
              <tr>
                <td key={key}>
                  <Link to={`/country/${country.name}`}>
                    <Image src={country.flag} />
                  </Link>
                </td>

                <td key={key}>
                  <Link to={`/country/${country.name}`}>{country.name}</Link>
                </td>
                <td key={key}>{country.capital}</td>
                <td key={key}>{country.region}</td>
                <td key={key}>{country.population}</td>
                <td key={key}>{country.timezones[0]}</td>
                <td key={key}>{country.currencies[0].name}</td>
                <td key={key}>{country.languages[0].nativeName}</td>
                <td>
                  <Button
                    onClick={(e) => dispatch(insertCart(country))}
                    variant="outline-danger"
                    className="heart"
                  >
                    <RiHeartAddFill size={25} className="heart-add" />
                  </Button>
                </td>
              </tr>
            ))}
          ;
        </tbody>
      </Table>
    </Container>
  );
}

export default TableContent;
