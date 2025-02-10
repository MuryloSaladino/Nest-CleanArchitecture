import { hashSync } from "bcryptjs";
import BaseEntity from "src/infrastructure/entities/base.entity";
import { BeforeInsert, Column, Entity, JoinColumn, OneToOne } from "typeorm";

@Entity("users")
export default class User extends BaseEntity {

    @Column({ type: "varchar", length: 20 })
    username: string;

    @Column()
    email: string;

    @Column({ select: false })
    password: string;


    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password)
    }
}