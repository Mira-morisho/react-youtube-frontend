import React from "react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import "../Styles/Videos_tyle.css";
import Comment from "./Comment";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";
import Comments from "./Comments";

export default function LireVideo() {
  const { id } = useParams();
  const query = new URLSearchParams(window.location.search);
  const [commentaire, setCommentaire] = useState("");

  function sendComment() {
    if (commentaire) {
      axios
        .post("http://localhost:3001/commentaire/add", {
          description: commentaire,
        })
        .then((res) => {
          console.log(res.data);
        });
    }
  }

  return (
    <>
      <div>
        <div className="navigation">
          <NavBar />
        </div>
        <div className="interface">
          <Sidebar />
          <div className="video_lecture">
            <YouTube videoId={id} className="lirevideo" />
            <div className="titre-video">{query.get("name")}</div>
            <h3>{query.get("commentaire")} </h3>
          </div>
        </div>
        <Comments videoId={id} currentUserId={localStorage.getItem("userId")} />
      </div>
    </>
  );
}
