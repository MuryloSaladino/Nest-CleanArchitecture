import { Module } from "@nestjs/common";
import { UsersUseCasesProxyModule } from "../usecases-proxy/users.usecases-proxy.module";
import { UsersController } from "./users/users.controller";

@Module({
    imports: [UsersUseCasesProxyModule.register()],
    controllers: [UsersController],
})
export class ControllersModule {}
