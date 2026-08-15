
import type { Player } from "../types/player.ts";
import type { Team } from "../types/team.ts";
import type { Venue } from "../types/venue.ts";

// mock data (made by AI)
const mockPlayers: Player[] = [
    { id: "p1", firstName: "Иван", lastName: "Петров", level: 85 },
    { id: "p2", firstName: "Алексей", lastName: "Смирнов", level: 92 },
    { id: "p3", firstName: "Мария", lastName: "Иванова", level: 78 },
    { id: "p4", firstName: "Екатерина", lastName: "Козлова", level: 88 },
    { id: "p5", firstName: "Дмитрий", lastName: "Соколов", level: 95 },
    { id: "p6", firstName: "Ольга", lastName: "Михайлова", level: 72 },
    { id: "p7", firstName: "Сергей", lastName: "Федоров", level: 90 },
    { id: "p8", firstName: "Анна", lastName: "Морозова", level: 82 },
    { id: "p9", firstName: "Павел", lastName: "Волков", level: 76 },
    { id: "p10", firstName: "Татьяна", lastName: "Алексеева", level: 89 },
];

const mockTeams: Team[] = [
    {
        id: "t1",
        name: "Тигры",
        level: 85,
        players: [mockPlayers[0], mockPlayers[1], mockPlayers[2]],
    },
    {
        id: "t2",
        name: "Драконы",
        level: 90,
        players: [mockPlayers[3], mockPlayers[4], mockPlayers[5]],
    },
    {
        id: "t3",
        name: "Соколы",
        level: 78,
        players: [mockPlayers[6], mockPlayers[7], mockPlayers[8]],
    },
    {
        id: "t4",
        name: "Медведи",
        level: 92,
        players: [mockPlayers[9], mockPlayers[0], mockPlayers[1]],
    },
];

const mockVenues: Venue[] = [
    {
        id: "v1",
        name: "Центральный стадион",
        locationByWords: "ул. Спортивная, 1, Москва",
    },
    {
        id: "v2",
        name: "Арена Победы",
        locationByWords: "пр. Победы, 15, Санкт-Петербург",
    },
    {
        id: "v3",
        name: "Спорткомплекс Юность",
        locationByWords: "ул. Молодежная, 23, Казань",
    },
    {
        id: "v4",
        name: "Ледовый дворец",
        locationByWords: "ул. Хоккейная, 5, Новосибирск",
    },
];

export const getData = (section: string) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            switch (section) {
                case "player": resolve([...mockPlayers]); break;
                case "team": resolve([...mockTeams]); break;
                case "venue": resolve([...mockVenues]); break;
                default: resolve([]);
            }
        }, 500);
    });
};