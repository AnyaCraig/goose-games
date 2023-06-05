import { Game } from "../../types";
import { GameListItem } from "./GameListItem";

interface GameListProps {
  games: Game[];
}

export const GameList = ({ games }: GameListProps) => {
  return (
    <section>
      <h1>Your Games</h1>
      <ul>
        {games.map((game) => (
          <GameListItem key={game.id} game={game} />
        ))}
      </ul>
    </section>
  );
};
