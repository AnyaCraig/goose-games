import React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { deleteGame } from "../../functions";
import { Game, GameId } from "../../types"

export const GameDetail = () => {
    const location = useLocation();
    const { game } = location.state;

    const navigate = useNavigate();

    console.log("GAME", game);

    const handleDeleteClick = async (id: GameId) => {
        await deleteGame(id);
        navigate('/games');
    }

    return (
        <>
            <p>{game.name}</p>
            <p>{game.description}</p>
            
            <Link to={`/update-game/${game.id}`} state={{ game: game, isNewGame: false }}>
                <button>Update Game</button>
            </Link>

            <button onClick={() => handleDeleteClick(game.id)}>Delete this game</button>
        </>

    )
}