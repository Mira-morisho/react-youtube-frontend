import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar_style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const InputSearch = () => {
  const { searchWord } = useParams();
  const [inputSearch, setInputSearch] = useState(searchWord);

  const handleChange = (e) => {
    setInputSearch(e.target.value);
  };
  return (
    <>
      <form className="barderecherche">
        <input
          className="search"
          type="text"
          placeholder="search"
          onChange={handleChange}
          value={inputSearch}
        />
        <Link className="button_link" to={`/Searchpage/${inputSearch}`}>
          <button className="searchbar searchbar__button" type="submit">
            <FontAwesomeIcon icon={faSearch} className="icones" />
          </button>
        </Link>
      </form>
    </>
  );
};

export default InputSearch;
