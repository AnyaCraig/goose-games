import React, { useState, useEffect, PropsWithChildren } from 'react';
import { fetchGameData } from '../functions';
import { Game } from '../functions';
import './App.css';

const Container = ({children }: PropsWithChildren) => {

  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {  
    (async () => {

      setLoading(true);

      try{
        const gamesData = await fetchGameData();
        setGames(gamesData);
      } catch(err) {
        if (err instanceof Error) {
          setError(err)
        } else {
          setError(new Error(String(err)));
        }
      }
      setLoading(false);
    })();

  }, []);

  console.log("GAMES!", games);
  console.log("LOADING", loading);
  console.log("ERROR", error);

  return (
    <>
      {children}
    </>
  ); 
}

function App() {
  return (
    <Container>
      <p>Poop</p>
    </Container>

  );
}


export default App;