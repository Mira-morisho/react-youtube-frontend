import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Styles/Videos_tyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import ClipLoader from "react-spinners/ClipLoader";
import InputSearch from "./InputSearch";

function VideoChaine() {
  //state
  const [video, setVideo] = useState([]);
  const { channelId } = useParams();

  //behavior
  const key = "AIzaSyB-_y9M1f5YNneWKjRHe20bcFjym93tS38";
  const fecthData = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&maxResults=45&key=${key}`;
  const accessToken = localStorage.getItem("item");
  console.log("Main component : ", accessToken);

  useEffect(() => {
    fetch(fecthData, {
      method: "GET",
      headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
    })
      .then((res) => res.json())
      .then((data) => setVideo(data.items));
  }, []);

  const [loading, setLoading] = useState(false);

  return (
    <>
      <ClipLoader
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <div>
        <div className="navigation">
          <NavBar />
        </div>
        <div className="interface">
          <InputSearch />
        </div>
      </div>

      <div className="videos">
        {video &&
          video.map((data, index) => {
            const title = data.snippet.title;
            const videoTitle = title.replace(/&#39;/, "'");
            return (
              <Link
                className="videoAbonnement"
                to={`/video/${data.id.videoId}`}
              >
                <div className="images">
                  <img
                    src={data.snippet.thumbnails.medium.url}
                    alt="mon image"
                  />
                  <p>{videoTitle}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default VideoChaine;
