import { Entity } from "./entity";
import { Game } from "./game.entity";
import { User } from "./user.entity";

export abstract class Player extends Entity {
    userId!: string;
    user!: User;
    gameId!: string;
    game!: Game;
    hoursPlayed!: number;
    achievementsCount!: number;
}