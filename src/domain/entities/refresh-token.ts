import { Entity } from "./entity";
import { User } from "./user.entity";
import { randomBytes } from "node:crypto";

export class RefreshToken extends Entity {
    user: User;
    userId: string;
    value: string = this.generate();

    rotate() {
        this.deletedAt = null;
        this.value = this.generate();
    }
    
    invalidate() {
        this.deletedAt = new Date().toUTCString()
    }

    private generate(): string {
        return randomBytes(32).toString('base64');
    }
}