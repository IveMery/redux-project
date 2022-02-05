import React, { useEffect } from "react";
import { connect } from "react-redux";
import "../assets/styles/components/FavoriteList.scss";
import { useLocalStorage } from "../custom-hooks/useLocalStorage";
import Character from "./Character";
import Empty from "./Empty";

const FavoriteList = (props) => {
  const { favoriteCharacters } = props;

  const [local, setLocal] = useLocalStorage("favorite", []);

  useEffect(() => {
    setLocal(favoriteCharacters);
  }, [favoriteCharacters]);

  return (
    <div className="characterList">
      {!local?.length ? (
        <Empty />
      ) : (
        local?.map((character) => (
          <Character key={character.data.id} data={character.data} />
        ))
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    favoriteCharacters: state.favoriteCharacters,
  };
};

export default connect(mapStateToProps, null)(FavoriteList);
