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
    console.log(event.target.value);
    this.setState({ city: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(`Submitted: ${this.state.city}`);

    let url = `${BASE_URL}?q=${this.state.city}&lang=en&units=metric&appid=${appid}`;

    makeRequest(url)
      .then((response) => {
        console.log(response.data);
        this.setState({ response: decontructResponse(response.data) });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    let url = `${BASE_URL}?q=${this.state.city}&lang=en&units=metric&appid=${appid}`;

    makeRequest(url)
      .then((response) => {
        console.log(response.data);
        this.setState({ response: decontructResponse(response.data) });
      })
      .catch((error) => {
        console.log(error);
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
