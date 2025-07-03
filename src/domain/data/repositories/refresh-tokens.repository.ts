import { RefreshToken } from "../../entities/refresh-token";
import { Repository } from "../repository";

export abstract class RefreshTokensRepository extends Repository<RefreshToken> {}