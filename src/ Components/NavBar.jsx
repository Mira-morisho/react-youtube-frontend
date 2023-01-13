import React from "react";
import "../Styles/navbar_style.css";
import Logosite from "./Logosite";
import InputSearch from "./InputSearch";
import Iconenavabar from "./Iconenavabar";
import Logout from "./Logout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Logosite />
      {/* <InputSearch /> */}
      <Link to={"/home"}>
        <FontAwesomeIcon icon={faHome} className="icones" />
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "link-active" : "blink-inactive"
          }
        >
          Home
        </NavLink>{" "}
      </Link>

      <Link to={"/Abonnement"}>
        <div className="home">
          <FontAwesomeIcon icon={faVideo} className="icones" />
          <NavLink
            to={"/Abonnement"}
            className={({ isActive }) =>
              isActive ? "link-active" : "blink-inactive"
            }
          >
            Subscription
          </NavLink>{" "}
        </div>
      </Link>
      <Logout />
      <Iconenavabar />
    </div>
  );
}

export default NavBar;
