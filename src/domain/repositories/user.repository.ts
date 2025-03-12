import { UserModel } from "../models/user.model";
import { IBaseRepository } from "./base.repository";

export interface IUsersRepository extends IBaseRepository<UserModel> {
    findWithGames(id: string): Promise<UserModel | null>;
    existsByEmail(email: string): Promise<boolean>;
    findOneByEmail(email: string): Promise<UserModel | null>;
}
