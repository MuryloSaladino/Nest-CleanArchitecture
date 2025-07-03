export interface TokenPayload {
    username: string;
    userId: string;
}

export abstract class TokenAuthenticator {
    abstract generateToken(payload: TokenPayload): string;
    abstract extractToken(token: string): Promise<TokenPayload>;
}
