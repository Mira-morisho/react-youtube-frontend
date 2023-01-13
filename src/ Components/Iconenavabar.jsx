import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function Iconenavabar() {
  const profile = localStorage.getItem("image");

  return (
    <div className="iconenavnar">
      <img className="profile-image" src={profile} alt="" />
    </div>
  );
}

export default Iconenavabar;
