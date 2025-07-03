import { Entity } from "./entity";
import { User } from "./user.entity";

export abstract class RefreshToken extends Entity {
    user!: User;
    userId!: string;
    value!: string;

    abstract rotate(): void;
    abstract invalidate(): void;
}