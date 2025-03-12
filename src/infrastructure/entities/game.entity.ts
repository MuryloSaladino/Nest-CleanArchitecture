import { GameModel } from "src/domain/models/game.model";
import { BaseEntity } from "./base.entity";
import { Column, OneToMany } from "typeorm";
import { PlayEntity } from "./play.entity";

export class GameEntity extends BaseEntity implements GameModel {
    
    @Column()
    name: string;
    
    @Column({ type: "year" })
    year: number;
    
    @Column({ type: "text" })
    description: string;
    
    @OneToMany(() => PlayEntity, (p) => p.game)
    playedBy: PlayEntity[];
}