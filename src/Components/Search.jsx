import React, { useState } from "react";
import SearchResult from "./SearchResult";

const Search = () => {
  const [img, setImg] = useState("");

  const inputEvent = (event) => {
    const data = event.target.value;
    console.log(data);
    setImg(data);
  };

  return (
    <>
      <div className="searchbar">
        <input
          type="search"
          value={img}
          placeholder="Search Here"
          dir="ltr"
          onChange={inputEvent}
        />
        {img === "" ? null : <SearchResult name={img} />}
      </div>
    </>
  );
};

export default Search;
