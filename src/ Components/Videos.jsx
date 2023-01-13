import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import InputSearch from "./InputSearch";
import images from "../Assets/tube.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import ClipLoader from "react-spinners/ClipLoader";

function Videos() {
  const [video, setVideo] = useState([]);
  const accessToken = localStorage.getItem("item");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&key=AIzaSyB-_y9M1f5YNneWKjRHe20bcFjym93tS38",
      {
        method: "GET",
        headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setVideo(data.items);
        setLoading(false);
      });
  }, []);
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
        <div className="input-videos">
          <div>
            <InputSearch />
          </div>
          <div className="videos">
            {!video ? (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              ></div>
            ) : (
              video.map((data, index) => {
                return (
                  <div>
                    <Link
                      className="link"
                      to={`/video/${data.id}?name=${data.snippet.localized.title}?commentaire=${data.statistics.commentCoun}`}
                      key={index}
                    >
                      <div className="images">
                        <img
                          className="img"
                          src={data.snippet.thumbnails.medium.url}
                          alt="mon image"
                        />
                        <p>{data.snippet.localized.title}</p>
                        <p>{data.snippet.channelTitle}</p>
                        <div>
                          <div className="alignementcommentaire">
                            <div className="barcommentaire">
                              <FontAwesomeIcon
                                icon={faMessage}
                                className="commentaire"
                              />
                              <p>{data.statistics.commentCount}</p>
                            </div>

                            <div className="barcommentaire">
                              <FontAwesomeIcon
                                icon={faHeart}
                                className="commentaire"
                              />
                              <p>{data.statistics.likeCount}</p>
                            </div>
                          </div>

                          <p> {data.snippet.publishedAt}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Videos;
