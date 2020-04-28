
import React from "react";
import Table from "../../components/table/index";
import "./style.css";

function Wrapper(props) {
  return (
    <main className="wrapper"> 
    <Table {...props} />
    </main>
 ) 
}

export default Wrapper;
