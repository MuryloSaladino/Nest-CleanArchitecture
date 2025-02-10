import IUser from "../models/user.model";
import IBaseRepository from "./base.repository";

export interface IUserRepository extends IBaseRepository<IUser> {
    findOneByEmail(email: string): IUser | Promise<IUser>;
}