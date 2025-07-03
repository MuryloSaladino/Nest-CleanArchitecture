export abstract class PasswordHasher {
    abstract hash(str: string): Promise<string>;
    abstract compare(password: string, hashedPassword: string): Promise<boolean>;
}
