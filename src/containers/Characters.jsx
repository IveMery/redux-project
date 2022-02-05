import React from "react";
import CharacterList from "../components/CharacterList";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../actions";
import Search from "../components/Search";

const Characters = () => {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const handleSetSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <Search
        handleSetSearch={handleSetSearch}
        handleSubmit={handleSubmit}
        search={search}
      />
      <CharacterList search={search} />
    </section>
  );
};

export default Characters;
