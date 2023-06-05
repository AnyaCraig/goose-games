import React from "react";
import { Link } from "react-router-dom";
import { defaultGameImage } from "../../constants";
import { Game } from "../../types";

interface GameListItemProps {
  game: Game;
}

export const GameListItem = ({ game }: GameListItemProps) => {
  const gameImage = `assets/${game.photo || defaultGameImage}`;
  const wrapperClassList = "container bg-offWhite rounded-xl p-xs flex";

  return (
    <li className="mb-4">
      <Link to={`/games/${game.id}`} state={{ game: game }}>
        <div className={wrapperClassList}>
          <div className="mr-xs w-gameAvatarWidth">
            <img src={gameImage} className="w-full" />
          </div>
          <div>
            <h3>{game.name}</h3>
            <p>{game.description}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};
