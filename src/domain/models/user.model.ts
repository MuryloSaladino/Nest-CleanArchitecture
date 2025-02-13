import BaseModel from "./base.model";

export default class UserModel extends BaseModel {
    username: string;
    email: string;
    password: string;
}
