import React, { Component } from "react";
import Wrapper from "./components/wrapper/index";
import Table from "./components/table/index";
import Row from "./components/row/index";
import API from "./utils/Api";

class App extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
  this.renderEmp();
  };
renderEmp() {
    API.generateEmployees()
      .then((res) => {
        console.log(res.data.results);
        this.setState({ results: res.data.results });
      })
      .catch((err) => console.log(err));
}

  render() {
    return (
      <div>
        <Wrapper results={this.state.results}>
        </Wrapper>
      </div>
    );
  }
}
export default App;
