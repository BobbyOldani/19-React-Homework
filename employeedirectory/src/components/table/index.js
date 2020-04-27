import React, { component } from "react";
import Results from "../row/index";
import API from "../../utils/Api";
import Row from "../../components/row/index";

function Table(props) {
  console.log(props.results);
  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col"><button onClick={() => props.sortName("name")} className="btn btn-light">Name</button></th>
          <th scope="col"><button onClick={() => props.sortLocation("location")} className="btn btn-light">Location</button></th>
          <th scope="col"><button onClick={() => props.sortLogin("login")} className="btn btn-light">Login</button></th>
          <th scope="col"><button onClick={() => props.sortEmail("email")} className="btn btn-light">Email</button ></th>
        </tr>
      </thead>

      <Row results={props.results} />
    </table>
  );
}

export default Table;
