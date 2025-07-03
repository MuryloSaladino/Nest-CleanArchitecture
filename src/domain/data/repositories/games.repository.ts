import { Game } from "../../entities/game.entity";
import { Repository } from "../repository";

export abstract class GamesRepository extends Repository<Game> {}
