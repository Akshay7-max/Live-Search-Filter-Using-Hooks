import React from "react";

const SearchResult = (props) => {
  const img = `https://source.unsplash.com/random/400 × 300/?${props.name}`;
  return (
    <>
      <div className="searchImg">
        <img src={img} alt="Search Data" />
      </div>
    </>
  );
};

export default SearchResult;
