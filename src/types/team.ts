import type {Player} from "./player.ts";

export interface Team {
    id: string;
    name: string;
    level: number;
    logo?: string;
    players: Player[];
}