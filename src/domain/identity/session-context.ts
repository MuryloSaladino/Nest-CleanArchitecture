import { User } from "../entities/user.entity";

export abstract class SessionContext {
    authToken?: string;
    refreshToken?: string;
    abstract getUser(): Promise<User>;
}