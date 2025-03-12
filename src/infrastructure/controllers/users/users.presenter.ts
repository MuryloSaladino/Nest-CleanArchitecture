import { ApiProperty } from "@nestjs/swagger";
import { PlayEntity } from "src/infrastructure/entities/play.entity";
import { UserEntity } from "src/infrastructure/entities/user.entity";

export class UserPresenter {
    @ApiProperty()
    readonly id: string;
    @ApiProperty()
    readonly createdAt: Date;
    @ApiProperty()
    readonly updatedAt: Date;
    @ApiProperty()
    readonly deletedAt: Date | null;
    @ApiProperty()
    readonly username: string;
    @ApiProperty()
    readonly email: string;
    @ApiProperty()
    readonly plays?: PlayEntity[];

    constructor(user: UserEntity) {
        this.id = user.id;
        this.createdAt = user.createdAt;
        this.updatedAt = user.updatedAt;
        this.deletedAt = user.deletedAt;
        this.username = user.username;
        this.email = user.email;
        this.plays = user.plays;
    }
}
