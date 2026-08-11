import type {TournamentStage} from "./tournamentStage";
import type {Team} from "./team.ts";
import type {Schedule} from "./schedule.ts";

export interface Tournament {
    id: string;
    name: string;
    sport: "FOOTBALL";
    type: "TEAMS" | "SOLO";
    stages: TournamentStage[];
    teams: Team[];
    teamsCount: 2 | 4 | 8 | 16 | 32 | 64;
    schedule?: Schedule;
}