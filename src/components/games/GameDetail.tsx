import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { deleteGame, fetchMissionData } from "../../functions";
import { Mission } from "../../types";
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

  return (
    <>
      <p>{game.name}</p>
      <p>{game.description}</p>

      <h3>Missions</h3>
      <MissionList missions={missions} />

      <Link
        to={`/update-game/${game.id}`}
        state={{ game: game, isNewGame: false }}
      >
        <button>Update Game</button>
      </Link>

      <button onClick={() => handleDeleteClick(game.id)}>
        Delete this game
      </button>
    </>
  );
};
