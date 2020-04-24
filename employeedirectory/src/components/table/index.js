import React, { component } from "react";
import Results from "../row/index";
import API from "../../utils/Api";
import Row from "../../components/row/index";

function Table(props) {
  console.log(props.results);
  return (
    <table class="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Location</th>
          <th scope="col">Login</th>
          <th scope="col">Email</th>
        </tr>
      </thead>

      <Row results={props.results} />
    </table>
  );
}

export default Table;
