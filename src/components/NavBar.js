import React from "react";

function NavBar({ handleChange, handleSubmit, city }) {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Weather App"
            ></svg>
          </a>

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
                Features
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
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            onSubmit={handleSubmit}
          >
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search city..."
              aria-label="Search"
              onChange={handleChange}
              value={city}
            />

            {/* <input type="submit" className="btn btn-warning" /> */}

            {/* <div className="">
              <button type="submit" >
                Search
              </button>
            </div> */}
          </form>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
