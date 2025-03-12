import { Paginated } from "src/domain/interfaces/pagination.interface";

export interface IBaseRepository<T> {
    create(entity: Partial<T>): Promise<T>;
    findById(id: string): Promise<T | null>;
    findAll(page?: number, size?: number): Promise<Paginated<T>>;
    exists(id: string): Promise<boolean>;
    update(id: string, payload: Partial<T>): Promise<T | null>;
    delete(id: string): Promise<void>;
}