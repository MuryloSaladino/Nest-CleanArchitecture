import BaseModel from "../models/base.model";

export default interface IBaseRepository<T extends BaseModel> {
    create(entity: Partial<T>): Promise<T>;
    findById(id: string): Promise<T>;
    findAll(limit?: number, offset?: number): Promise<T[]>;
    update(id: string, payload: Partial<T>): Promise<T>;
    delete(id: string): Promise<void>;
}