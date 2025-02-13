import { InjectRepository } from "@nestjs/typeorm";
import { IUsersRepository } from "src/domain/repositories/user.repository";
import User from "../entities/user.entity";
import { Repository } from "typeorm";
import BaseRepository from "./base-repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export default class UsersRepository extends BaseRepository<User> implements IUsersRepository {
    constructor(
        @InjectRepository(User)
        protected readonly repository: Repository<User>
    ) { super() }


    public async findOneByEmail(email: string): Promise<User | null> {
        return await this.repository.findOne({
            where: { email }
        });
    }
}