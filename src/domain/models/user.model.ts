import IBaseModel from "./base.model";

export default interface IUser extends IBaseModel {
    username: string;
    email: string;
    password: string;
}