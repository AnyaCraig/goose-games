import React, { useState, useEffect } from "react";
import { loadingGifUrl } from "../constants";
import { fetchGameData } from "../functions";
import { Game } from "../types";

import "./App.css";
import { GameList } from "./games/GameList";
import { Header } from "./header/Header";

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

  return (
    <div className="full-page-wrapper bg-lightGrey">
      <Header />
      <div className="main-content-wrapper pt-8">
        {loading && (
          <>
            /* we could put a loading icon here, but with this small amount of
            data, it's appears so briefly that it's jarring */
          </>
        )}
        {error && <p>Oh, fudge. We couldn't load the games for some reason.</p>}
        <GameList games={games} />
      </div>
    </div>
  );
};

export default App;
