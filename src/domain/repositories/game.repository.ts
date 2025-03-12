import { GameModel } from "../models/game.model";
import { IBaseRepository } from "./base.repository";

export interface IGamesRepository extends IBaseRepository<GameModel> {}