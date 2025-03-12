import { BaseModel } from "./base.model";
import { PlayModel } from "./play.model";

export class UserModel extends BaseModel {
    username: string;
    email: string;
    password: string;
    plays: PlayModel[];
}
