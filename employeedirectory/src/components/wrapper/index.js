
import React from "react";
import Table from "../../components/table/index";
import "./style.css";

function Wrapper(props) {
  console.log(props.results);
  return (
    <main className="wrapper" {...props}> 
    <Table results={props.results}>
    </Table>
    </main>
 ) 
}

export default Wrapper;
