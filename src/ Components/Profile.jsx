import React from "react";
import "../styles/profile_style.css";
import { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import { Link, useParams } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState([]);
  const { userId } = useParams();

  const fetchData = `http://localhost:3001/api/user/${userId}`;
  const accessToken = localStorage.getItem("token");

  useEffect(() => {
    fetch(fetchData, {
      method: "GET",
      headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log("items: ", data.github);
      });
  }, []);

  return (
    <>
      <ProfileCard user={user} />
    </>
  );
};

export default Profile;
