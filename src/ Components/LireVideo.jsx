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
        <Comments />

        {/* <div className=" mes-commentaire">
          <di className="imputajouter-commentaire">
            <input
              className="ajouter-commentaire"
              type="text"
              placeholder="Entrer votre commentaire"
              onChange={(event) => setCommentaire(event.target.value)}
            />
            <button
              onClick={sendComment()}
              type="texte"
              className=" boutoncomment"
            >
              Ajouter un commentaire{" "}
            </button>
          </di>
          <div className="nom-utulisateur">
            <h4 className="profil-utilisateur">Mira Morisho</h4>
            <div> il ya 1h </div>
          </div>
          <div> Ça date ça donne des sencation de réécouter ça</div>
          <div className="repondre-comment">
            <div>
              <FontAwesomeIcon icon={faHome} className="icones" />
            </div>
            <div className="sous-commentaire">Repondre</div>
          </div>
        </div> */}
      </div>
    </>
  );
}
