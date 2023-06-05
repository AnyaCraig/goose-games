import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export const Header = ({ children }: PropsWithChildren) => {
  const headerClassList =
    "w-full pb-5 pt-6 border-b border-darkGrey border-solid bg-lightGrey";
  const linkWrapperClassList = "";
  const linkClassList = "mr-10 font-bold uppercase";

  return (
    <header className={headerClassList}>
      <ul className="main-content-wrapper flex">
        <li className={linkClassList}>
          <Link to={`/`}>your games</Link>
        </li>
        <li className={linkClassList}>
          <Link
            to={`/create-game`}
            state={{ game: undefined, isNewGame: true }}
          >
            Add a game
          </Link>
        </li>
      </ul>
    </header>
  );
};
