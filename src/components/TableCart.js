import React from "react";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { removeCart } from "../redux/action";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const TableCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return state.cart;
  });

  return (
    <React.Fragment>
      <Container className="cart-container">
        <Table striped bordered hover className="cart-table">
          <thead>
            <tr>
              <th>Flag</th>
              <th>Name</th>
              <th>Region</th>
              <th>currency</th>
              <th>Language</th>
              <th>Remove from favList</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((country) => {
              return (
                <tr key={country.name}>
                  <td style={{ width: "20em" }}>
                    <Image src={country.flag} style={{ width: "25%" }} />
                  </td>
                  <td style={{ width: "20em" }}>{country.name}</td>
                  <td>{country.region}</td>
                  <td>{country.currencies[0].name}</td>
                  <td>{country.languages[0].name}</td>
                  <td>
                    <Button onClick={() => dispatch(removeCart(country.name))}>
                      <RiDeleteBin5Fill />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </React.Fragment>
  );
};

export default TableCart;
