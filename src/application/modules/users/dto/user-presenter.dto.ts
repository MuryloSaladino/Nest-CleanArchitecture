import User from "src/infrastructure/entities/user.entity";

export default class UserPresenter {
    
    public readonly id: string;
    public readonly username: string;
    public readonly email: string;

    public static fromUser({ id, username, email }: User): UserPresenter {
        return { id, username, email };
    }
}
