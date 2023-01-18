import React from "react";
import { GoogleLogin } from "react-google-login";
import "../Styles/login.css";
import { useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";
import axios from "axios";

export default function Login() {
  const clientId =
    "788629390659-rbb4ksm8te2v3tijobl53bbh1f4boqsg.apps.googleusercontent.com";
  const navigate = useNavigate();
  const onSuccess = (res) => {
    console.log("LOGIN success! Current user: ", res);

    const profilePhoto = res.profileObj["imageUrl"];
    localStorage.setItem("image", profilePhoto);

    axios
      .post("http://localhost:3001/user", {
        name: res.profileObj.givenName + " " + res.profileObj.familyName,
        email: res.profileObj.email,
        imageUrl: res.profileObj.imageUrl,
      })
      .then(
        (response) => {
          console.log("Response : ", response, response.data.user.name);
          localStorage.setItem("userId", response.data.user._id);
          localStorage.setItem("imageUrl", response.data.user.imageUrl);
          localStorage.setItem("userName", response.data.user.name);

          navigate("/home");
        },
        (error) => {
          console.log(error);
        }
      );

    console.log(res.accessToken);
    const accessToken = res.accessToken;
    localStorage.setItem("item", accessToken);
    navigate("/home");
  };

  const onFaillure = (res) => {
    console.log("LOGIN FAILLURE! res: ", res);
  };

  return (
    <form className="form">
      <div className="login">
        <h1 className="connexion">Connexion</h1>
        <div className="acceuil">
          <h2 className="titre">Morfira </h2>
          <p className="paraghe"> veillez selletioner votre comte google </p>
        </div>
        <GoogleLogin
          clientId={clientId}
          render={(renderProps) => (
            <button
              className="btn-login"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              select your google account
            </button>
          )}
          onSuccess={onSuccess}
          onFaillure={onFaillure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
          scope="https://www.googleapis.com/auth/youtube"
        />
      </div>
    </form>
  );
}
