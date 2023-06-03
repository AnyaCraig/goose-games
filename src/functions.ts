import { gamesEndpoint } from "./constants";
import { Game, RawGameData, GAMETYPE, GameId } from "./types";

const determineIfGameActive = (startDate: string, endDate: string): boolean => {
  const rightNow = new Date();
  return new Date(startDate) < rightNow && new Date(endDate) < rightNow;
}

const determineIfGameComplete = (endDate: string) => {
  const rightNow = new Date();
  return new Date(endDate) < rightNow;
}

const transformGameData = (rawData: RawGameData):Game => {

  return {
      description: rawData.description,
      id: rawData.id,
      name: rawData.name,
      photo: rawData.photo || '',
      location: rawData.location || '',
      start_date: rawData.start_date,
      end_date: rawData.start_date,
      is_currently_active: rawData.start_date && rawData.end_date ? determineIfGameActive(rawData.start_date, rawData.end_date) : false,
      is_completed: rawData.end_date ? determineIfGameComplete(rawData.end_date): false,
      teams_enabled: rawData.teams_enabled || false,
      game_type: rawData.game_type || GAMETYPE.default,
  }
};

export const fetchGameData = async (): Promise<Game[]> => {
  try {
    const gamesResponse = await fetch(gamesEndpoint);
    const responseBody = (await gamesResponse.json()) as RawGameData[];
    return responseBody.map((game) => transformGameData(game));
  } catch(err) {
    throw new Error(`Here is an error: ${err}`);
  }
};

const getHeaders = () => {
  const requestHeaders = new Headers();
  requestHeaders.append('Content-Type', 'application/json');
  return requestHeaders;
}

export const createOrUpdateGame = async (gameData: any, isNewGame = true): Promise<any> => {

  const endpoint = isNewGame ? gamesEndpoint : `${gamesEndpoint}/${gameData.id}`;

  const request = new Request(endpoint, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(gameData),
  });

  // console.log(JSON.stringify(gameData));
  // console.log("REQUEST", request, "isNew Game", isNewGame,);
  
  try {
    const response = await fetch(request);
    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

export const deleteGame = async (gameId?: GameId): Promise<any> => {

  const endpoint = `${gamesEndpoint}/${gameId}`;

  const request = new Request(endpoint, {
    method: "DELETE",
    headers: getHeaders(),
  });

  try {
    const response = await fetch(request);
    const result = await response.json();
    console.log("Success:", result);
    return true;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
