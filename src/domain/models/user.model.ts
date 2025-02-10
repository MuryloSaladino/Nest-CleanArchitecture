import BaseModel from "./base.model";

export default interface IUser extends BaseModel {
    username: string;
    email: string;
    password: string;
}