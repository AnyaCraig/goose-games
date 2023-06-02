type GameType = "DEFAULT" | "RECREATIONAL" | "ONBOARDING" | "TOUR" | "TEAM_BUILDING";

const GAMETYPE = {
    recreational: "RECREATIONAL",
    onboarding: "ONBOARDING",
    tour: "TOUR",
    teamBuilding: "TEAM_BUILDING",
    default: "DEFAULT",
} as const;
  
type GAMETYPE = typeof GAMETYPE[keyof typeof GAMETYPE];

export interface RawGameData {
    description: string;
    id: number;
    name: string;
    photo?: string;
    location?: string;
    start_date?: string;
    end_date?: string;
    game_type?: GameType;
    teams_enabled?: boolean;
}

export interface Game {
    description: string;
    id: number;
    name: string;
    photo: string;
    location: string;
    start_date: string | undefined;
    end_date: string | undefined;
    game_type: GameType;
    teams_enabled: boolean;
    is_currently_active: boolean;
    is_completed: boolean;
}

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
    const gamesResponse = await fetch("http://localhost:3000/games");
    const responseBody = (await gamesResponse.json()) as RawGameData[];
    return responseBody.map((game) => transformGameData(game));
  } catch(err) {
    console.log("ERR", err);
    throw new Error(`Here is an error: ${err}`);
  }
};
