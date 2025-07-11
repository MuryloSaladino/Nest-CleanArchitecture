import { Entity } from "./entity";

export abstract class User extends Entity {
    username!: string;
    email!: string;
    password!: string;
    isAdmin!: boolean;
}
