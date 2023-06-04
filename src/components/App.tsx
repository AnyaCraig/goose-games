import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { lightGrey, loadingGifUrl } from "../constants";
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
        setError(undefined);
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

  const wrapperClassList = `bg-[${lightGrey}]`;

  return (
    <div className={wrapperClassList}>
      <Header>
        <Link to={`/`}>Home</Link>
        <Link to={`/games`}>Your games</Link>
        <Link to={`/create-game`} state={{ game: undefined, isNewGame: true }}>
          Add a new game!
        </Link>
      </Header>
      <div className="max-w-md">
        {loading && <img src={loadingGifUrl} alt="loading..." />}
        {error && <p>Oh, fudge. We couldn't load the games for some reason.</p>}
        <GameList games={games} />
      </div>
    </div>
  );
};

export default App;
