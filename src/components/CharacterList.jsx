import React, { useEffect, useState } from "react";
import "../assets/styles/components/CharacterList.scss";
import Character from "./Character";
import Error from "./Error";
import Loader from "./Loader";
import useGetCharacters from "../custom-hooks/useGetCharacters";

const CharacterList = ({ search }) => {
  const { characters, loading, error, getCharacters } = useGetCharacters();
  const [filterCharacters, setFilterCharacters] = useState("");

  useEffect(() => {
    setFilterCharacters(
      characters.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="characterList">
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        filterCharacters.map((character) => (
          <Character key={character.id} data={character} />
        ))
      )}
    </div>
  );
};

export default CharacterList;
