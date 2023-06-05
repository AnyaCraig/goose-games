import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import { createOrUpdateGame } from "../../functions";
import { Game } from "../../types";

export const GameForm = () => {
  const location = useLocation();
  const { game: existingGameValues, isNewGame } = location.state;
  const navigate = useNavigate();

  const [gameName, setGameName] = useState("");
  const [gameDescription, setGameDescription] = useState("");
  const [gamePhoto, setGamePhoto] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!isNewGame && existingGameValues) {
      populateExistingFormValues(existingGameValues);
    }
  }, []);

  const populateExistingFormValues = (existingFormValues: Game) => {
    setGameName(existingFormValues.name);
    setGameDescription(existingFormValues.description);
    setGamePhoto(existingFormValues.photo);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const gameInfo = {
      ...existingGameValues,
      name: gameName,
      description: gameDescription,
      photo: gamePhoto,
    };

    try {
      if (isNewGame) {
        await createOrUpdateGame(gameInfo);
      } else {
        await createOrUpdateGame(gameInfo, false);
      }
      setError(false);
    } catch {
      setError(true);
    }

    navigate("/games");
  };

  return (
    <>
      <h1>{isNewGame ? "Create a Game" : "Update Your Game"}</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="label-input-group">
          <label htmlFor="gameName">Game Name</label>
          <i aria-hidden="true">*</i>
          <input
            name="exampleInput"
            id="gameName"
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
            required
            aria-required="true"
            className="form-input"
          />
        </div>

        <div className="label-input-group">
          <label htmlFor="gameDescription">
            Game Description<i aria-hidden="true">*</i>
          </label>

          <textarea
            name="gameDescription"
            id="gameDescription"
            value={gameDescription}
            onChange={(e) => setGameDescription(e.target.value)}
            required
            aria-required="true"
            className="form-input"
          />
        </div>

        <div className="label-input-group">
          <label htmlFor="gamePhoto">Game Photo</label>
          <input
            name="gamePhoto"
            id="gamePhoto"
            value={gamePhoto}
            onChange={(e) => setGamePhoto(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="my-md">
          <button className="button button-jade" type="submit">
            Submit
          </button>
          <Link to={`/games`}>
            <button className="button button-amber">Cancel</button>
          </Link>
        </div>
      </form>
      {error && (
        <p>Oh no! Your game died on the way back to its home planet.</p>
      )}
    </>
  );
};
