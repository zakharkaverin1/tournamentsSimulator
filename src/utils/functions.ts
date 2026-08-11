export const expectedGoals = (levelTeam: number, levelOpponent: number): number => {
    const avgGoals = 1.5;
    const diff = levelTeam - levelOpponent;
    const tanhValue = Math.tanh(diff / 400);// формула Эло + гиперболический тангенс
    return avgGoals * Math.exp(0.5 * tanhValue);
};

export const scoredGoals = (xG: number) : number =>{
    const randomFactor = Math.random() * xG * 2;
    return Math.floor(randomFactor);
}

export const stageCounter = (len: number) => {
    let currentStage = len;
    return (): string => {
        const stages: Record<number, string> = {
            2: "Final",
            4: "Semi Final",
            8: "Quarter Final",
            16: "Round of 16",
            32: "Round of 32"
        };
        const stage = stages[currentStage];
        currentStage = currentStage / 2;
        return stage ?? "Unknown stage";
    };
};