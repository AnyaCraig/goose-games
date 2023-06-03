import React from "react";
import { Link } from "react-router-dom";
import { Game } from "../../types";

interface GameListItemProps {
  game: Game;
}

export const GameListItem = ({ game }: GameListItemProps) => {
  const classList = "bg-orange-50 border-orange-100 border-3 w-full mb-32";
  return (
    <Link to={`/games/${game.id}`} state={{ game: game }}>
      <div className={classList}>
        <p>{game.name}</p>
        <p>{game.description}</p>
      </div>
    </Link>
  );
};
