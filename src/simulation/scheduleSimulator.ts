import type { Match } from "../types/match";
import { simulateMatch } from "./matchSimulator";

export function simulateSchedule(matches: Match[]): Match[] {
    return matches.map(match => simulateMatch(match));
}