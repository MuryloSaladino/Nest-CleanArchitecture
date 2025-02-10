import IBaseRepository from "src/domain/repositories/base.repository";
import BaseEntity from "../entities/base.entity";
import { DeepPartial, Repository } from "typeorm";

export default abstract class BaseRepository<TEntity extends BaseEntity> implements IBaseRepository<TEntity> {
    
    private repository: Repository<TEntity>

    public constructor(repository: Repository<TEntity>) {
        this.repository = repository;
    }

    public async create(entity: Partial<TEntity>): Promise<TEntity> {
        const entityCreation = this.repository.create(entity as DeepPartial<TEntity>);
        return await this.repository.save(entityCreation)
    }

    public async findById(id: string): Promise<TEntity> {
        throw new Error("Method not implemented.");
    }

    public async findAll(limit?: number, offset?: number): Promise<TEntity[]> {
        throw new Error("Method not implemented.");
    }

    public async update(id: string, payload: Partial<TEntity>): Promise<TEntity> {
        throw new Error("Method not implemented.");
    }

    public async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}