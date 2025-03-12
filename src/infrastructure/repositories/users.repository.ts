import { InjectRepository } from "@nestjs/typeorm";
import { IUsersRepository } from "src/domain/repositories/user.repository";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { UserEntity } from "../entities/user.entity";
import { BaseRepository } from "./base-repository";

@Injectable()
export class UsersRepository extends BaseRepository<UserEntity> implements IUsersRepository {
    constructor(
        @InjectRepository(UserEntity)
        protected readonly repository: Repository<UserEntity>
    ) { super() }


    public async findOneByEmail(email: string): Promise<UserEntity | null> {
        return await this.repository.findOne({
            where: { email }
        });
    }

    public async existsByEmail(email: string): Promise<boolean> {
        return await this.repository.existsBy({ email });
    }
}