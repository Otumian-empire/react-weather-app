import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div
        className="Card card container d-flex align-items-center justify-content-center"
        id=""
      >
        <img
          src={this.props.response.icon}
          className="card-img-top"
          alt="weather icon"
          width={100}
          height={200}
        />
        <div className="card-body">
          <h5 className="card-title">
            {`${this.props.response.country}, ${this.props.response.city} weather`}
          </h5>
          <p className="card-text">{this.props.response.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            temperature - {this.props.response.temperature}
          </li>{" "}
          <li className="list-group-item">
            pressure - {this.props.response.pressure}
          </li>{" "}
          <li className="list-group-item">
            humidity - {this.props.response.humidity}
          </li>
          <li className="list-group-item">
            wind speed - {this.props.response.windSpeed}
          </li>{" "}
          <li className="list-group-item">
            sunrise - {this.props.response.sunrise}
          </li>{" "}
          <li className="list-group-item">
            sunset - {this.props.response.sunset}
          </li>{" "}
        </ul>
      </div>
    );
  }
}

export default Card;
