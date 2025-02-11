import { Inject, Injectable } from "@nestjs/common";
import UsersRepository from "src/infrastructure/repositories/users.repository";
import CreateUserDTO from "./dto/create-user.dto";
import UserPresenter from "./dto/user-presenter.dto";

@Injectable()
export default class UsersService {
    constructor(
        @Inject()
        private readonly usersRepository: UsersRepository
    ) {}


    public async create(payload: CreateUserDTO): Promise<UserPresenter> {
        const user = await this.usersRepository.create(payload);
        return UserPresenter.fromUser(user);
    }
}
