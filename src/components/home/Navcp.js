import { Component } from "react";
import logo from "./../../img/person.jpg";
import { Link } from "react-router-dom";

class Navcp extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <i
            className="fas fa-bars"
            style={{
              paddingRight: ".5rem",
              color: "#9d3d6b",
              fontWeight: "bolder",
              fontSize: "2rem",
            }}
          ></i>
          penske
        </Link>
        <div>
          <Link to="/" className="company-name">
            north star motors
            <i
              className="fas fa-caret-down"
              style={{ paddingLeft: ".5rem" }}
            ></i>
          </Link>
        </div>
        <nav>
          <a href="#">
            <img src={logo} />
          </a>
          <a href="#" className="name-user">
            jean valjean
            <i
              className="fas fa-chevron-down"
              style={{ paddingLeft: ".5rem" }}
            ></i>
          </a>
        </nav>
      </header>
    );
  }
}

export default Navcp;
