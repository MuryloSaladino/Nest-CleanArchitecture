import { BaseModel } from "./base.model";

export class GameModel extends BaseModel {
    name: string;
    year: number;
    description: string;
}