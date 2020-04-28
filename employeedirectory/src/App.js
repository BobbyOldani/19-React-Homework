import React, { Component } from "react";
import Wrapper from "./components/wrapper/index";
import API from "./utils/Api";

class App extends Component {
  state = {
    results: [],
    sortBy: ""
  };

  componentDidMount() {
  this.renderEmp();
  };

  handleInputChange = (sortBy) => {
    this.setState({sortBy: sortBy})
    this.sort(sortBy)
  };

 sort = (sortBy) => {
      let postSort = [];
      switch(sortBy) {
        case "name":
          postSort = this.state.results.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);
          this.setState({results: postSort  });
          break;
        case "location":
          postSort = this.state.results.sort((a, b) => (a.location.city > b.location.city) ? 1 : -1);
          this.setState({results: postSort  });
          break;
        case "login":
          postSort = this.state.results.sort((a, b) => (a.login.username > b.login.username) ? 1 : -1);
          this.setState({results: postSort  });
          break;
        case "email":
          postSort = this.state.results.sort((a, b) => (a.email > b.email) ? 1 : -1);
          this.setState({results: postSort  });
          break;
          default:
            break;

      }
    }


  // sortEmail = () => {
  //   let sortedEmail = this.state.results.sort((a, b) => (a.email > b.email) ? 1 : -1);
  //   this.setState({results: sortedEmail  });
  // };

  // sortLocation = () => {
  //   let sortedLocation = this.state.results.sort((a, b) => (a.location.city > b.location.city) ? 1 : -1);
  //   this.setState({results: sortedLocation});
  // }

  // sortName = () => {
  //   let sortedName = this.state.results.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);
  //   this.setState({results: sortedName});
  // }

  // sortLogin = () => {
  //   let sortedLogin = this.state.results.sort((a, b) => (a.login.username > b.login.username) ? 1 : -1);
  //   this.setState({results: sortedLogin});
  // }

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
        sortBy={this.state.sortBy}
        handleInputChange={this.handleInputChange}>
        </Wrapper>
      </div>
    );
  }
}
export default App;
