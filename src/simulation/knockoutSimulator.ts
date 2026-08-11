import type {Team} from "../types/team.ts";
import type {Match} from "../types/match.ts";
import {generateKnockoutSchedule} from "./knockoutScheduleGenerator.ts";
import {simulateStage} from "./stageSimulator.ts";
import {stageCounter} from "../utils/functions.ts";

export function simulateKnockout(teams: Team[]): Team {
    if (teams.length === 0) {
        throw new Error("No team found.");
    }
    const nextStage = stageCounter(8);
    while (teams.length !== 1) {
        let matches: Match[] = generateKnockoutSchedule(teams);
        console.log(nextStage())
        matches = simulateStage(matches);

        matches.forEach(match => {
            console.log(
                match.homeTeam.name,
                match.homeScore + ":" + match.awayScore,
                match.awayTeam.name
            );
        });

        // оставляем только победителей
        teams = matches.map(match => match.winner!);
    }

    return teams[0];
}