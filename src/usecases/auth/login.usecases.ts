import { NotFoundError } from "src/infrastructure/errors/not-found.error";
import { UnauthorizedError } from "src/infrastructure/errors/unauthrized.error";
import { IBcryptService } from "src/domain/adapters/bcrypt.interface";
import { IJWTService } from "src/domain/adapters/jwt.interface";
import { IUsersRepository } from "src/domain/repositories/user.repository";

export class LoginUseCases {
    constructor(
        private readonly jwtService: IJWTService,
        private readonly bcryptService: IBcryptService,
        private readonly usersRepository: IUsersRepository,
    ) {}

    async login(email: string, password: string) {
        const user = await this.usersRepository.findOneByEmail(email);
        if(!user) throw new NotFoundError("Username not found");

        const match = await this.bcryptService.compare(password, user.password);
        if(!match) throw new UnauthorizedError("Invalid credentials");

        const token = this.jwtService.createToken({
            userId: user.id,
            username: user.username,
        });

        return { token }
    }
}