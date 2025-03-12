import { GameModel } from "./game.model";
import { UserModel } from "./user.model";

export class PlayModel {
    userId: string;
    user: UserModel;
    gameId: string;
    game: GameModel;
}