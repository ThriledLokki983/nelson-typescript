import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import useCountries from "../custom-hooks/useCountries";
import { LinkContainer } from "react-router-bootstrap";
import Image from "react-bootstrap/Image";
import { RiHeartAddFill } from "react-icons/ri";

function TableContent() {
  const [countries, data] = useCountries();

  return (
    <Container>
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
          {countries.map((country, key) => (
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
                <Link>
                  <RiHeartAddFill size={25} className="heart-add" />
                </Link>
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
