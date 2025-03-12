import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { UserModel } from "src/domain/models/user.model";
import { PlayEntity } from "./play.entity";

@Entity("users")
export class UserEntity extends BaseEntity implements UserModel {

    @Column({ type: "varchar", length: 20 })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column({ select: false })
    password: string;

    @OneToMany(() => PlayEntity, (p) => p.user)
    plays: PlayEntity[];
}
