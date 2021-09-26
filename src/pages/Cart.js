import React from "react";
import HeaderCountryPage from "../components/HeaderCountryPage";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Table from "react-bootstrap/Table";
import TableCart from "../components/TableCart";

function Cart() {
  return (
    <React.Fragment>
      <HeaderCountryPage />

      <TableCart />
      <Footer />
    </React.Fragment>
  );
}

export default Cart;
