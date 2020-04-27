import React, { Component } from "react";
import Wrapper from "./components/wrapper/index";
import Table from "./components/table/index";
import Row from "./components/row/index";
import API from "./utils/Api";

class App extends Component {
  state = {
    results: []
  };

  componentDidMount() {
  this.renderEmp();
  };

  sortEmail = () => {
    let sortedEmail = this.state.results.sort((a, b) => (a.email > b.email) ? 1 : -1);
    this.setState({results: sortedEmail  });
  };

  sortLocation = () => {
    let sortedLocation = this.state.results.sort((a, b) => (a.location.city > b.location.city) ? 1 : -1);
    this.setState({results: sortedLocation});
  }

  sortName = () => {
    let sortedName = this.state.results.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);
    this.setState({results: sortedName});
  }

  sortLogin = () => {
    let sortedLogin = this.state.results.sort((a, b) => (a.login.username > b.login.username) ? 1 : -1);
    this.setState({results: sortedLogin});
  }

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
        <Wrapper 
        results={this.state.results}
        sortEmail={this.sortEmail}
        sortLocation={this.sortLocation}
        sortName={this.sortName}
        sortLogin={this.sortLogin}>
        </Wrapper>
      </div>
    );
  }
}
export default App;
