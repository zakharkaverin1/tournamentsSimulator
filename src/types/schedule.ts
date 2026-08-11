import type {Match} from "./match.ts";

export interface Schedule {
    id: string;
    matches: Match[];
}