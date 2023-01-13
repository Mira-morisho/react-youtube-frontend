import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/profileUpdate_style.css";

const ProfileUpdate = () => {
  const ref = useRef();
  const handleClick = (e) => {
    ref.current.click();
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <div className="profile_container">
      <div className="photo_upload">
        <div className="image" htmlFor="selected-image">
          {imageUrl && selectedImage ? (
            <img src={imageUrl} alt={selectedImage.name} className="profile" />
          ) : (
            <img
              src="https://ca.slack-edge.com/T03BH6JN601-U03FK6874CF-fb4094095857-512"
              alt="profile-picture"
              className="profile"
            />
          )}
        </div>
        <div onClick={handleClick}>
          <i className="fa-solid fa-camera photo_upload img_download_icon"></i>
          <input
            ref={ref}
            type="file"
            accept=".jpg,.jpeg,.png"
            style={{ display: "none" }}
            id="selected-image"
            onChange={(e) => setSelectedImage(e.target.files[0])}
          />
        </div>
      </div>
      <div className="identities">
        <div className="identities_upload">
          <div>
            <i className="fa-solid fa-user"></i>
          </div>
          <div>
            <input
              type="text"
              name=""
              id=""
              className="input_fields"
              placeholder="Léon Masakuna"
            />
          </div>
        </div>
        <div className="identities_upload">
          <div>
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div>
            <input
              type="text"
              name=""
              id=""
              className="input_fields"
              placeholder="masakunamfengleon@gmail.com"
            />
          </div>
        </div>
        <div className="identities_upload">
          <div>
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <div>
            <input
              type="text"
              name=""
              id=""
              className="input_fields"
              placeholder="https://www.linkedin.com/in/l%C3%A9on-Mira-Morisho-130303201/"
            />
          </div>
        </div>
        <div className="identities_upload">
          <div>
            <i className="afa-brands fa-square-github"></i>
          </div>
          <div>
            <input
              type="text"
              name=""
              id=""
              className="input_fields"
              placeholder="https://github.com/Mira-Morisho"
            />
          </div>
        </div>
        <div className="profile_buttons">
          <Link
            className="button_link"
            to={`/userprofile/${localStorage.getItem("userId")}`}
          >
            <button>Cancel</button>
          </Link>
          <Link className="button_link">
            <button>Validate</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
