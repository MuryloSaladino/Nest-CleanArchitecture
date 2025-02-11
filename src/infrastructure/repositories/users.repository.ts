import { InjectRepository } from "@nestjs/typeorm";
import { IUserRepository } from "src/domain/repositories/user.repository";
import User from "../entities/user.entity";
import { Repository } from "typeorm";
import BaseRepository from "../common/base-repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export default class UsersRepository extends BaseRepository<User> implements IUserRepository {
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