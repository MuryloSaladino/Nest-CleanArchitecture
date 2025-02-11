import { Body, Controller, HttpCode, HttpStatus, Inject, Post } from "@nestjs/common";
import UsersService from "./users.service";
import CreateUserDTO from "./dto/create-user.dto";

@Controller("/users")
export default class UsersController {
    constructor(
        @Inject()
        private readonly usersService: UsersService
    ) {}

    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    public async createUser(@Body() payload: CreateUserDTO) {
        return this.usersService.create(payload);
    }
}
