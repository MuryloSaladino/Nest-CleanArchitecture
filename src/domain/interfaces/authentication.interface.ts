export interface IAuthService {
    login(email: string, password: string): string | Promise<string>;
}
