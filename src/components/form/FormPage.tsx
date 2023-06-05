import { Header } from "../header/Header";
import { GameForm } from "./GameForm";

export const FormPage = () => {
  return (
    <div className="full-page-wrapper bg-lightGrey">
      <Header />
      <div className="main-content-wrapper grow pt-8">
        <GameForm />
      </div>
    </div>
  );
};
