import { Body, Controller, Get, Inject, Param, Post } from "@nestjs/common";
import { ApiResponseType } from "src/infrastructure/common/swagger/response.decorator";
import UseCaseProxy from "src/infrastructure/usecases-proxy/usecases-proxy";
import UseCasesProxyModule from "src/infrastructure/usecases-proxy/usecases-proxy.module";
import CreateUserUseCases from "src/usecases/users/create-user.usecases";
import UserPresenter from "./users.presenter";
import { CreateUserDTO } from "./users.dto";
import GetUserUseCases from "src/usecases/users/get-user.usecases";

@Controller("/users")
export default class UsersController {
    constructor(
        @Inject(UseCasesProxyModule.CREATE_USER_PROXY)
        private readonly createUserUseCaseProxy: UseCaseProxy<CreateUserUseCases>,
        @Inject(UseCasesProxyModule.GET_USER_PROXY)
        private readonly getUserUseCaseProxy: UseCaseProxy<GetUserUseCases>,
    ) {}


    @Post()
    @ApiResponseType(UserPresenter)
    async createUser(@Body() payload: CreateUserDTO) {
        const { email, password, username } = payload;
        const user = await this.createUserUseCaseProxy
            .getInstance().execute(username, email, password);
        return new UserPresenter(user);
    }

    @Get("/:id")
    @ApiResponseType(UserPresenter)
    async getUser(@Param("id") id: string) {
        const user = await this.getUserUseCaseProxy
            .getInstance().execute(id);
        return new UserPresenter(user);
    }
}
