import { DynamicModule, Module } from "@nestjs/common";
import { LoggerModule } from "../services/logger/logger.module";
import { RepositoriesModule } from "../repositories/repositories.module";
import { BCryptModule } from "../services/bcrypt/bcrypt.module";
import { JWTModule } from "../services/jwt/jwt.module";
import { UseCaseProxy } from "./usecases-proxy";
import { LoginUseCases } from "src/usecases/auth/login.usecases";
import { BCryptService } from "../services/bcrypt/bcrypt.service";
import { UsersRepository } from "../repositories/users.repository";
import { JWTService } from "../services/jwt/jwt.service";

@Module({
    imports: [
        LoggerModule,
        RepositoriesModule,
        BCryptModule,
        JWTModule,
    ]
})
export class AuthUseCasesProxyModule {

    static LOGIN_PROXY = "loginProxy";

    static register(): DynamicModule {
        return {
            module: AuthUseCasesProxyModule,
            providers: [
                {
                    inject: [JWTService, BCryptService, UsersRepository],
                    provide: AuthUseCasesProxyModule.LOGIN_PROXY,
                    useFactory: (
                        jwtService: JWTService,
                        bcryptService: BCryptService,
                        usersRepository: UsersRepository
                    ) => new UseCaseProxy(new LoginUseCases(jwtService, bcryptService, usersRepository))
                },
            ],
            exports: [
                AuthUseCasesProxyModule.LOGIN_PROXY
            ]
        }
    }
}