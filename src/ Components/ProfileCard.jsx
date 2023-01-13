import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import ButtonMailto from "./MailTo";

const ProfileCard = ({ user }) => {
  return (
    <>
      <div className="container">
        <div className="back-arrow">
          <Link to={"/dashbord"} className="link">
            <i className="fa-solid fa-arrow-left"></i> {" Go back"}
          </Link>
        </div>
        <div className="logout-component">
          <Logout />
        </div>
        <div className="edit-button">
          <Link to={"/userprofiledit"} className="link">
            <i className="fa-solid fa-pen-to-square"></i> {" Edit"}
          </Link>
        </div>
      </div>
      <div className="profile-container">
        <div className="profile-pictures">
          <img src={user.imageUrl} alt="Léon Mfeng" className="profile-photo" />
        </div>
        <div className="profile-identity">
          <div className="name">
            <h2 className="user-name">{user.name}</h2>
          </div>
          <div className="row">
            <h2>
              <i className="fa-sharp fa-solid fa-envelope"></i>{" "}
              <span>
                <ButtonMailto
                  className="mail__address"
                  label={user.email}
                  mailto={`mailto:${user.email}`}
                />
              </span>
            </h2>
          </div>
          <a href={user.linkedin} target="_blank">
            <div className="row">
              <h2>
                <i className="fa-brands fa-linkedin"></i>{" "}
                <span>{user.linkedin}</span>
              </h2>
            </div>
          </a>
          <a href={user.github} target="_blank">
            <div className="row">
              <h2>
                <i class="fa-brands fa-square-github"></i>{" "}
                <span>{user.github}</span>
              </h2>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
