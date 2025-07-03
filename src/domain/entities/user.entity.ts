import { Entity } from "./entity";

export class User extends Entity {
    username: string;
    email: string;
    password: string;
    isAdmin: boolean;
}
