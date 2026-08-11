import type {TournamentStageType} from "./tournamentStageType";

export interface TournamentStage {
    id: string;
    type: TournamentStageType;
    name: string;
}