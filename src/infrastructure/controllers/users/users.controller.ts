import { Body, Controller, Inject, Post } from "@nestjs/common";
import { ApiResponseType } from "src/infrastructure/common/swagger/response.decorator";
import UseCaseProxy from "src/infrastructure/usecases-proxy/usecases-proxy";
import UseCasesProxyModule from "src/infrastructure/usecases-proxy/usecases-proxy.module";
import CreateUserUseCases from "src/usecases/users/create-user.usecases";
import UserPresenter from "./users.presenter";
import { CreateUserDTO } from "./users.dto";

@Controller("/users")
export default class UsersController {
    constructor(
        @Inject(UseCasesProxyModule.CREATE_USER_PROXY)
        private readonly createUserUseCaseProxy: UseCaseProxy<CreateUserUseCases>,
    ) {}


    @Post()
    @ApiResponseType(UserPresenter)
    async createUser(@Body() payload: CreateUserDTO) {
        const { email, password, username } = payload;
        const user = await this.createUserUseCaseProxy
            .getInstance().execute(username, email, password);
        return new UserPresenter(user);
    }
}
