import type {Player} from "./player.ts";

export interface Team {
    id: string;
    name: string;
    level: number | 50;
    logo?: string;
    players: Player[];
}