import React from "react";
import "../assets/styles/components/Search.scss";

const Search = ({ handleSetSearch, handleSubmit, search }) => {
  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          search={search}
          onChange={handleSetSearch}
        />
      </form>
    </div>
  );
};

export default Search;
