export const expectedGoals = (levelTeam: number, levelOpponent: number): number => {
    const avgGoals = 1.35;
    const diff = levelTeam - levelOpponent;
    const tanhValue = Math.tanh(diff / 400);// формула Эло + гиперболический тангенс
    return avgGoals * Math.exp(0.5 * tanhValue);
};

export const scoredGoals = (xG: number) : number =>{
    const randomFactor = Math.random() * xG * 2;
    return Math.floor(randomFactor);
}