import { gamesEndpoint } from "./constants";
import { Game, RawGameData, GAMETYPE, Mission } from "./types";

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
    throw new Error(`Oh gosh, something went wrong: ${err}`);
  }
};

const getHeaders = () => {
  const requestHeaders = new Headers();
  requestHeaders.append('Content-Type', 'application/json');
  return requestHeaders;
}

export const createOrUpdateGame = async (gameData: Game, isNewGame = true) => {

  const endpoint = isNewGame ? gamesEndpoint : `${gamesEndpoint}/${gameData.id}`;
  const method = isNewGame ? "POST" : "PATCH";

  const request = new Request(endpoint, {
    method: method,
    headers: getHeaders(),
    body: JSON.stringify(gameData),
  });

  try {
    const response = await fetch(request);
    const result = await response.json();
    console.log("You just successfully chucked this game up to the server:", result);
    return result;
  } catch (error) {
    console.error("Oh, crud. This happened:", error);
  }
}

export const deleteGame = async (gameId?: number) => {

  const endpoint = `${gamesEndpoint}/${gameId}`;

  const request = new Request(endpoint, {
    method: "DELETE",
    headers: getHeaders(),
  });

  try {
    const response = await fetch(request);
    const result = await response.json();
    console.log("This game gone now:", result);
    return true;
  } catch (error) {
    console.error("We had some trouble deleting that:", error);
    return false;
  }
}

export const fetchMissionData = async (gameId: number): Promise<Mission[]> => {
  try {
    const missionsResponse = await fetch(`${gamesEndpoint}/${gameId}/missions`);
    const responseBody = (await missionsResponse.json()) as Mission[];
    return responseBody;
  } catch(err) {
    throw new Error(`Oh gosh, something went wrong getting the missions: ${err}`);
  }
};
