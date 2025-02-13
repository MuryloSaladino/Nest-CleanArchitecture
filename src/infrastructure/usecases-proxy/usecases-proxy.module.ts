import { DynamicModule, Module } from "@nestjs/common";
import UseCaseProxy from "./usecases-proxy";
import CreateUserUseCases from "src/usecases/users/create-user.usecases";
import LoggerService from "../services/logger/logger.service";
import UsersRepository from "../repositories/users.repository";
import BCryptService from "../services/bcrypt/bcrypt.service";
import LoggerModule from "../services/logger/logger.module";
import RepositoriesModule from "../repositories/repositories.module";
import BCryptModule from "../services/bcrypt/bcrypt.module";

@Module({
    imports: [
        LoggerModule,
        RepositoriesModule,
        BCryptModule,
    ]
})
export default class UseCasesProxyModule {
    // Users
    static CREATE_USER_PROXY = "createUserProxy";

    
    static register(): DynamicModule {
        return {
            module: UseCasesProxyModule,
            providers: [
                {
                    inject: [LoggerService, UsersRepository, BCryptService],
                    provide: UseCasesProxyModule.CREATE_USER_PROXY,
                    useFactory: (
                        logger: LoggerService,
                        usersRepository: UsersRepository,
                        bcryptService: BCryptService
                    ) => new UseCaseProxy(new CreateUserUseCases(logger, usersRepository, bcryptService))
                }
            ],
            exports: [
                UseCasesProxyModule.CREATE_USER_PROXY
            ]
        }
    }
}
