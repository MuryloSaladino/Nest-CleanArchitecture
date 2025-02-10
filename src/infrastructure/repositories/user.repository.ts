import { InjectRepository } from "@nestjs/typeorm";
import IUser from "src/domain/models/user.model";
import { IUserRepository } from "src/domain/repositories/user.repository";
import User from "../entities/user.entity";
import { Repository } from "typeorm";
import BaseRepository from "../common/base-repository";

export default class UserRepository extends BaseRepository<IUser> implements IUserRepository {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {
        super(userRepository);
    }


    public async findOneByEmail(email: string): Promise<IUser> {
        throw new Error("Method not implemented.");
    }

    public async create(user: Partial<IUser>): Promise<IUser> {
        throw new Error("Method not implemented.");
    }

    public async findById(id: string): Promise<IUser> {
        throw new Error("Method not implemented.");
    }

    public async findAll(limit?: number, offset?: number): Promise<IUser[]> {
        throw new Error("Method not implemented.");
    }

    public async update(id: string, payload: Partial<IUser>): Promise<IUser> {
        throw new Error("Method not implemented.");
    }

    public async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}