import { Entity } from "./entity";
import { Player } from "./player.entity";

export class Game extends Entity {
    name: string;
    year: number;
    description: string;
    players: Player[];
}