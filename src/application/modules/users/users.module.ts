import { Module } from "@nestjs/common";
import UsersController from "./users.controller";
import UsersService from "./users.service";
import RepositoriesModule from "src/infrastructure/repositories/repositories.module";

@Module({
    imports: [RepositoriesModule],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService]
})
export default class UsersModule {}
