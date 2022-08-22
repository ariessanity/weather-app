import React, { useState } from "react";
import "../Styles/Search.scss";
import SearchIcon from "@mui/icons-material/Search";

function Search(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = () => {
    props.setSearch(input);
  };

  console.log(props.search);
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        name="city"
        placeholder="type city name"
        value={input}
        onChange={handleChange}
      />
      <SearchIcon className="search__icon" onClick={handleSubmit} />
    </div>
  );
}

export default Search;
