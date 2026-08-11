import type {Team} from "../types/team.ts";
import type {Match} from "../types/match.ts";

export function generateKnockoutSchedule(teams: Team[]) : Match[] {
    const matches: Match[] = [];

    for (let i = 0; i < teams.length; i += 2) {
        matches.push({
            id: crypto.randomUUID(),
            homeTeam: teams[i],
            awayTeam: teams[i + 1],
            status: "SCHEDULED"
        });
    }

    return matches;
}