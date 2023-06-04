
export const GAMETYPE = {
    recreational: "RECREATIONAL",
    onboarding: "ONBOARDING",
    tour: "TOUR",
    teamBuilding: "TEAM_BUILDING",
    default: "DEFAULT",
} as const;
  
export type GameType = typeof GAMETYPE[keyof typeof GAMETYPE];

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

export const MISSIONCATEGORY = {
  photoVideo: "photo+video",
  text: "text",
  gps: "gps",
  default: "DEFAULT",
} as const;

export type MissionCategory = typeof MISSIONCATEGORY[keyof typeof MISSIONCATEGORY];

export type MissionId = number;

export interface Mission {
  id: number;
  game_id: number;
  name: string;
  description: string;
  points: number;
  category: MissionCategory;
  latitude: number;
  longitude: number;
  location: string;
}