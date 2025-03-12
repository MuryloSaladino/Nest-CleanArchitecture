import { BaseModel } from "./base.model";
import { PlayModel } from "./play.model";

export class GameModel extends BaseModel {
    name: string;
    year: number;
    description: string;
    playedBy: PlayModel[];
}