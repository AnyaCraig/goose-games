import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../components/App";
import { ErrorPage } from "../components/error-page/ErrorPage";
import { GameForm } from "../components/form/GameForm";
import { GameDetail } from "../components/games/GameDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/games",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/create-game",
    element: <GameForm/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/games/:id",
    element: <GameDetail/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/update-game/:id",
    element: <GameForm/>,
    errorElement: <ErrorPage/>,
  },
  ]);