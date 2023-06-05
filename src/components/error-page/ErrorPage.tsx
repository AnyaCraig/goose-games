import { Header } from "../header/Header";

export const ErrorPage = () => {
  return (
    <div className="full-page-wrapper bg-lightGrey">
      <Header />
      <main className="main-content-wrapper grow pt-8">
        <h1>Uh oh! Something went wrong.</h1>
        <img
          src="https://i.redd.it/k9wl9ypumyp31.png"
          className="w-2/6 max-w-[300px]"
        />
      </main>
    </div>
  );
};
