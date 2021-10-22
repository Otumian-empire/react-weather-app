import React, { Component } from "react";
import Card from "./components/Card";
import NavBar from "./components/NavBar";

import {
  decontructErrorResponse,
  decontructResponse,
  makeRequest,
} from "./utils";

const appid = "ca3570ec2d8b24d40013142ea88729a3";
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
            response: decontructResponse(result),
          });
        } else {
          this.setState({
            error: decontructErrorResponse(result),
          });
        }
      })
      .catch((error) => {
        this.setState({
          error: "error occured",
        });
      });
  };

  componentDidMount() {
    let url = `${BASE_URL}?q=${this.state.city}&lang=en&units=metric&appid=${appid}`;

    makeRequest(url)
      .then((result) => {
        if (result.cod === 200) {
          this.setState({
            response: decontructResponse(result),
          });
        } else {
          this.setState({
            error: decontructErrorResponse(result),
          });
        }
      })
      .catch((error) => {
        this.setState({
          error: "error occured",
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
        {/* { if (this.state.error)} */}
        <Card response={this.state.response} />
      </div>
    );
  }
}

export default App;
