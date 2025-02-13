import UserModel from "src/domain/models/user.model";
import BaseEntity from "src/infrastructure/entities/base.entity";
import { Column, Entity } from "typeorm";

@Entity("users")
export default class User extends BaseEntity implements UserModel {

    @Column({ type: "varchar", length: 20 })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column({ select: false })
    password: string;
}
