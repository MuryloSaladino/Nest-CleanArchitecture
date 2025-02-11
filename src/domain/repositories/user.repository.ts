import IUser from "../models/user.model";
import IBaseRepository from "../common/base.repository";

export interface IUserRepository extends IBaseRepository<IUser> {
    findOneByEmail(email: string): Promise<IUser | null>;
}