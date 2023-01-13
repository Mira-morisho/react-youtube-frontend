import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import InputSearch from "./InputSearch";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import ClipLoader from "react-spinners/ClipLoader";

function Abonnement() {
  const [video, setVideo] = useState([]);
  const accessToken = localStorage.getItem("item");

  const [loading, setLoading] = useState(false);
  const apiKey = "AIzaSyB-_y9M1f5YNneWKjRHe20bcFjym93tS38";

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&maxResults=45&mine=true&key=${apiKey}`,
      {
        method: "GET",
        headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVideo(data.items);
        setLoading(false);
      });
  }, []);

  useEffect(() => {}, []);
  return (
    <>
      {loading ? (
        <ClipLoader
          className="loagin"
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
          align-items="center"
        />
      ) : (
        <div>
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
                const channelId = data.snippet.resourceId.channelId;
                return (
                  <Link to={`/VideoChaine/${channelId}`} key={index}>
                    <div className="images">
                      <img
                        src={data.snippet.thumbnails.medium.url}
                        alt="mon image"
                      />
                      <p>{data.snippet.title}</p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
}

export default Abonnement;
