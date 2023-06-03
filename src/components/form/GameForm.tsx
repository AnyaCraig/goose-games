import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 } from "uuid";

import { createOrUpdateGame } from "../../functions";
import { Game } from "../../types";

export const GameForm = () => {

  const location = useLocation();
  const { game: existingGameValues, isNewGame } = location.state;
  const navigate = useNavigate();

  const [gameName, setGameName] = useState('');
  const [gameDescription, setGameDescription] = useState('');
  const [gamePhoto, setGamePhoto] = useState('');

    useEffect(() => {
        if (!isNewGame && existingGameValues) {
            populateExistingFormValues(existingGameValues);
        }
      }, [])

    const populateExistingFormValues = (existingFormValues: Game) => {
        setGameName(existingFormValues.name);
        setGameDescription(existingFormValues.description);
        setGamePhoto(existingFormValues.photo);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const gameId = existingGameValues && existingGameValues.id ? existingGameValues.id : v4();

        const gameInfo = {
            name: gameName,
            description: gameDescription,
            photo: gamePhoto,
            id: gameId,
        };

        try {
            if (isNewGame) {
                await createOrUpdateGame(gameInfo);
            } else {
                await createOrUpdateGame(gameInfo, false)
            }
        } catch {
            console.log("Oh god there was an error here")
        }

        navigate('/games');
    }

    return (

        <form onSubmit={handleSubmit}>
        <label htmlFor="gameName">Game Name</label>
        <input
          name="exampleInput"
          id="gameName"
          value={gameName}
          onChange={(e) =>
            setGameName(e.target.value)
          }
          required
        />

        <label htmlFor="gameDescription">Game Description</label>
        <textarea
          name="gameDescription"
          id="gameDescription"
          value={gameDescription}
          onChange={(e) =>
            setGameDescription(e.target.value)
          }
          required
        />

        <label htmlFor="gamePhoto">Game Photo</label>
        <input
          name="gamePhoto"
          id="gamePhoto"
          value={gamePhoto}
          onChange={(e) =>
            setGamePhoto(e.target.value)
          }
        />
        <button type="submit">Submit</button>
      </form>
    )
    
}