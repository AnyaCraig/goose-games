
export const GAMETYPE = {
    recreational: "RECREATIONAL",
    onboarding: "ONBOARDING",
    tour: "TOUR",
    teamBuilding: "TEAM_BUILDING",
    default: "DEFAULT",
} as const;
  
export type GameType = typeof GAMETYPE[keyof typeof GAMETYPE];

export type GameId = number | string;

export interface RawGameData {
    description: string;
    id: GameId;
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
    id: GameId;
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