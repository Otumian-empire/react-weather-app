import Alert from "./components/Alert";
import React, { Component } from "react";
import Card from "./components/Card";
import NavBar from "./components/NavBar";

import {
  deconstructErrorResponse,
  deconstructResponse,
  makeRequest,
} from "./utils";

const appid = process.env.REACT_APP_API_KEY;
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: "Accra",
      response: {},
      error: "",
    };
  }

  handleChange = (event) => {
    this.setState({ city: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let url = `${BASE_URL}?q=${this.state.city}&lang=en&units=metric&appid=${appid}`;

    makeRequest(url)
      .then((result) => {
        if (result.cod === 200) {
          this.setState({
            response: deconstructResponse(result),
            error: "",
            city: "",
          });
        } else {
          this.setState({
            error: deconstructErrorResponse(result),
          });
        }
      })
      .catch((error) => {
        this.setState({
          error: "error occurred",
        });
      });
  };

  componentDidMount() {
    let url = `${BASE_URL}?q=${this.state.city}&lang=en&units=metric&appid=${appid}`;

    makeRequest(url)
      .then((result) => {
        if (result.cod === 200) {
          this.setState({
            response: deconstructResponse(result),
          });
        } else {
          this.setState({
            error: deconstructErrorResponse(result),
          });
        }
      })
      .catch((error) => {
        this.setState({
          error: "error occurred",
        });
      });
  }

  render() {
    return (
      <div className="">
        <NavBar
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          city={this.state.city}
        />

        {this.state.error.length > 0 && <Alert message={this.state.error} />}

        <Card response={this.state.response} />
      </div>
    );
  }
}

export default App;
