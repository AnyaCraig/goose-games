import { Game } from "../../types";
import { GameListItem } from "./GameListItem";

interface GameListProps {
  games: Game[];
}

export const GameList = ({ games }: GameListProps) => {
  return (
    <div>
      {games.map((game) => (
        <GameListItem key={game.id} game={game} />
      ))}
    </div>
  );
};
