import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="/" className="nav-link px-2 text-white">
                  Weather App
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Otumian-empire/react-weather-app.git"
                  className="nav-link px-2 text-white"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://openweathermap.org/"
                  className="nav-link px-2 text-white"
                >
                  OW-API
                </a>
              </li>
            </ul>

            <form
              className="d-flex col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              onSubmit={this.props.onSubmit}
              onClick={this.props.onClick}
            >
              <input
                type="search"
                className="form-control form-control-dark me-2"
                placeholder="Search city..."
                aria-label="Search"
                onChange={this.props.onChange}
                value={this.props.city}
              />

              <div className="text-end">
                <input
                  type="submit"
                  className="btn btn-warning"
                  value="Search"
                />
              </div>
            </form>
          </div>
        </div>
      </header>
    );
  }
}

export default NavBar;
