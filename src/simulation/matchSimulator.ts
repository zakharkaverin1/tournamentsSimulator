import type {Match} from "../types/match.ts";
import {expectedGoals, scoredGoals} from "../utils/functions.ts";

export function simulateMatch(match: Match): Match {
    const [team1, team2] = [match.homeTeam, match.awayTeam];
    const firstTeamGoals = scoredGoals(expectedGoals(team1.level, team2.level));
    const secondTeamGoals =  scoredGoals(expectedGoals(team2.level, team1.level));
    match.homeScore = firstTeamGoals;
    match.awayScore = secondTeamGoals;
    match.winner = firstTeamGoals > secondTeamGoals ? match.homeTeam : match.awayTeam;
    //правило выездного гола пока что. Ничья = победа гостей
    return match;
}