import { Entity } from "./entity";
import { Player } from "./player.entity";

export abstract class Game extends Entity {
    name!: string;
    year!: number;
    description!: string;
    players: Player[] = [];
}