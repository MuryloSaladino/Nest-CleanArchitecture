import { Player } from "../../entities/player.entity";
import { Repository } from "../repository";

export abstract class PlayersRepository extends Repository<Player> {}
