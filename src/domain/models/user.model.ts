import { BaseModel } from "./base.model";

export class UserModel extends BaseModel {
    username: string;
    email: string;
    password: string;
}
