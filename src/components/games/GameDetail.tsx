import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { defaultGameImage } from "../../constants";
import { deleteGame, fetchMissionData } from "../../functions";
import { Mission } from "../../types";
import { Header } from "../header/Header";
import { MissionList } from "../missions/MissionList";

export const GameDetail = () => {
  const location = useLocation();
  const { game } = location.state;
  const [missions, setMissions] = useState<Mission[]>([]);
  const [error, setError] = useState<Error | undefined>(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const missionData = await fetchMissionData(game.id);
        setError(undefined);
        setMissions(missionData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error(String(err)));
        }
      }
    })();
  }, []);

  const handleDeleteClick = async (id: number) => {
    await deleteGame(id);
    navigate("/games");
  };

  const gameImage = `assets/${game.photo || defaultGameImage}`;

  return (
    <section className="full-page-wrapper bg-offWhite">
      <Header />
      <div className="main-content-wrapper grow pt-8">
        <div>
          <h1 className="mt-0">{game.name}</h1>
          <p>{game.description}</p>
        </div>

        {!!missions.length && <MissionList missions={missions} />}
        <div className="my-md">
          <Link
            to={`/update-game/${game.id}`}
            state={{ game: game, isNewGame: false }}
          >
            <button className="button button-jade">Update Game</button>
          </Link>

          <button
            className="button button-amber"
            onClick={() => handleDeleteClick(game.id)}
          >
            Delete Game
          </button>
        </div>
      </div>
    </section>
  );
};
