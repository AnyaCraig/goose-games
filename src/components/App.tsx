import React, { useState, useEffect, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { fetchGameData } from "../functions";
import { Game } from "../types";

import "./App.css";
import { GameList } from "./games/GameList";
import { Header } from "./Header";

const App = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    (async () => {
      setLoading(true);

      try {
        const gamesData = await fetchGameData();
        setGames(gamesData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error(String(err)));
        }
      }
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <Header>
        <Link to={`/create-game`} state={{ game: undefined, isNewGame: true }}>
          Add a new game!
        </Link>
      </Header>
      <GameList games={games} />
    </>
  );
};

export default App;
