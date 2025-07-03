export abstract class Entity {
    id!: string;
    createdAt!: string;
    updatedAt!: string;
    deletedAt!: string | null;
}
