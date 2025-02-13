import { IBcryptService } from "src/domain/adapters/bcrypt.interface";
import UserModel from "src/domain/models/user.model";
import { IUsersRepository } from "src/domain/repositories/user.repository";
import { ILogger } from "src/domain/services/logger.interface";
import BadRequestError from "src/infrastructure/errors/bad-request.error";

export default class CreateUserUseCases {
    constructor(
        private readonly logger: ILogger,
        private readonly userRepository: IUsersRepository,
        private readonly bcryptService: IBcryptService,
    ) {}

    async execute(username: string, email: string, password: string) {
        if(await this.userRepository.existsByEmail(email)) {
            this.logger.warn("Email already registered", "CreateUserUseCases")
            throw new BadRequestError("Email already registered");
        }

        const user = new UserModel();
        user.username = username;
        user.email = email;
        user.password = await this.bcryptService.hash(password);
        
        const result = await this.userRepository.create(user);
        
        this.logger.log(`New user inserted to database { id: ${result.id} }`, "CreateUserUseCases");
    
        return result;
    }
}