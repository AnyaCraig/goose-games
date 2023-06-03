import React from "react"
import { Link } from "react-router-dom"
import { Game } from "../../types"


interface GameListItemProps {
    game: Game;
}

export const GameListItem = ({ game }:GameListItemProps) => {
    return (
        <Link to={`/games/${game.id}`} state={{ game: game }}>
            <div className="max-w-sm bg-sky-200 rounded overflow-hidden shadow-lg">
                <p>{game.name}</p>
                <p>{game.description}</p>
            </div>
        </Link>
    )
}