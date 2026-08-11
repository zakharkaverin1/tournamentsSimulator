import { simulateKnockout } from "../simulation/knockoutSimulator.ts";
import type { Team } from "../types/team.ts";


function createTeam(id: string, name: string, level: number): Team {
    return {
        id,
        name,
        level,
        players: []
    };
}


const teams: Team[] = [
    createTeam("1", "Barcelona", 90),
    createTeam("2", "Real Madrid", 88),
    createTeam("3", "Manchester City", 87),
    createTeam("4", "Bayern Munich", 91),
    createTeam("5", "PSG", 92),
    createTeam("6", "Inter", 86),
    createTeam("7", "Arsenal", 88),
    createTeam("8", "Atletico de Madrid", 85)
];


console.log("Starting knockout tournament...\n");


const champion = simulateKnockout(teams);


console.log("\nChampion:");
console.log(champion.name);
console.log(  "Level:", champion.level);