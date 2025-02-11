import { Paginated } from "src/domain/interfaces/pagination.interface";
import IBaseModel from "../models/base.model";

export default interface IBaseRepository<T extends IBaseModel> {
    create(entity: Partial<T>): Promise<T>;
    findById(id: string): Promise<T | null>;
    findAll(limit?: number, offset?: number): Promise<Paginated<T>>;
    update(id: string, payload: Partial<T>): Promise<T | null>;
    delete(id: string): Promise<void>;
}