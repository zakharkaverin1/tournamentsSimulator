import type {Team} from "../types/team.ts";
import type {Match} from "../types/match.ts";

function shuffle(array: Team[]): Team[] {
    return [...array].sort(() => Math.random() - 0.5);
}

export function generateKnockoutSchedule(teams: Team[]): Match[] {
    const shuffledTeams = shuffle(teams);

    const matches: Match[] = [];

    for (let i = 0; i < shuffledTeams.length; i += 2) {
        matches.push({
            id: crypto.randomUUID(),
            homeTeam: shuffledTeams[i],
            awayTeam: shuffledTeams[i + 1],
            status: "SCHEDULED"
        });
    }

    return matches;
}