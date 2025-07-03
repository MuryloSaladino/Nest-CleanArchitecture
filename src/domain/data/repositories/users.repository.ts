import { User } from "../../entities/user.entity";
import { Repository } from "../repository";

export abstract class UsersRepository extends Repository<User> {}
