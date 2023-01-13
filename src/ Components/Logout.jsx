import React from "react";
import "../Styles/login.css";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

const clientId =
  "788629390659-rbb4ksm8te2v3tijobl53bbh1f4boqsg.apps.googleusercontent.com";

function Logout() {
  const navigate = useNavigate();
  const onSuccess = () => {
    console.log("log out successfull!");
    navigate("/");
  };
  return (
    <div id="logout">
      <GoogleLogout
        clientId={clientId}
        render={(renderProps) => (
          <FontAwesomeIcon
            icon={faSignOut}
            className="btn-logout"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          />
        )}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
