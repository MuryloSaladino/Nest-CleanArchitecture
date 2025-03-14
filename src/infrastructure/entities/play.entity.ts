import { PlayModel } from "src/domain/models/play.model";
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { GameEntity } from "./game.entity";

@Entity("plays")
export class PlayEntity implements PlayModel {
    
    @PrimaryColumn()
    userId: string;
    
    @ManyToOne(() => UserEntity, { cascade: true, onDelete: "CASCADE" })
    @JoinColumn({ name: "userId" })
    user: UserEntity;
    
    @PrimaryColumn()
    gameId: string;
    
    @ManyToOne(() => GameEntity, { cascade: true, onDelete: "CASCADE" })
    @JoinColumn({ name: "gameId" })
    game: GameEntity;
}