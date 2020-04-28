import React from "react";
import Row from "../../components/row/index";

function Table(props) {
  console.log(props.results);
  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col"><button onClick={() => props.handleInputChange("name")} className="btn btn-light">Name</button></th>
          <th scope="col"><button onClick={() => props.handleInputChange("location")} className="btn btn-light">Location</button></th>
          <th scope="col"><button onClick={() => props.handleInputChange("login")} className="btn btn-light">Login</button></th>
          <th scope="col"><button onClick={() => props.handleInputChange("email")} className="btn btn-light">Email</button></th>
        </tr>
      </thead>

      <Row results={props.results} />
    </table>
  );
}

export default Table;
