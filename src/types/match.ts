import type {Venue} from "./venue.ts";
import type {Team} from "./team.ts";

export interface Match {
    id: string;
    homeTeam: Team;
    awayTeam: Team;
    homeScore?: number;
    awayScore?: number;
    status: "SCHEDULED" | "FINISHED";
    winner?: Team;
    venue?: Venue;
}