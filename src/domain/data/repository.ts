import { Paginated } from "./paginated";

export abstract class Repository<TEntity, TFilter extends Partial<TEntity> = Partial<TEntity>> {
    abstract create(entity: Partial<TEntity>): Promise<TEntity>;
    abstract update(id: string, payload: Partial<TEntity>): Promise<TEntity | null>;
    abstract delete(id: string): Promise<void>;
    abstract exists(filter: TFilter): Promise<boolean>;
    abstract findOne(filter: TFilter): Promise<TEntity | null>;
    abstract findOneOrFail(filter: TFilter): Promise<TEntity>;
    abstract findMany(filter?: TFilter): Promise<TEntity>;
    abstract findManyPaginated<TPaginationFilter extends TFilter & Paginated<TEntity>>(filter?: TPaginationFilter): Promise<TEntity>;
}