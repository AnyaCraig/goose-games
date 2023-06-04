import React from "react";
import { Link } from "react-router-dom";
import { defaultGameImage } from "../../constants";
import { Game } from "../../types";
// import * as butterKnifeGoose from "assets/butterKnifeGoose";

interface GameListItemProps {
  game: Game;
}

export const GameListItem = ({ game }: GameListItemProps) => {
  const assetsFolder = `../../assets/`;
  // const gameImage = require(`${assetsFolder}${game.photo || defaultGameImage}`);
  const classList =
    "container mx-auto bg-blue-200 rounded-xl shadow border p-8 m-10";

  return (
    <Link to={`/games/${game.id}`} state={{ game: game }}>
      <div className={classList}>
        <img
          src={require(`${assetsFolder}${game.photo || defaultGameImage}`)}
        />
        <p>{game.name}</p>
        <p>{game.description}</p>
      </div>
    </Link>
  );
};
