import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Abonnement from "./Abonnement";
import Logout from "./Logout";
import { Link } from "react-router-dom";

import "../Styles/sidebar_style.css";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Link to={"/home"}>
          <div className="home">
            {/* <FontAwesomeIcon icon={faHome} className="icones" />
            <h3>vides populaire</h3> */}
          </div>
        </Link>

        <Link to={"/Abonnement"}>
          <div className="home">
            {/* <FontAwesomeIcon icon={faVideo} className="icones" />
            <h3>Mes abonnements</h3> */}
          </div>
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
