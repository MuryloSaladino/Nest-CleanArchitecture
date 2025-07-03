import { RefreshToken } from "src/domain/entities/refresh-token";
import { Repository } from "../repository";

export abstract class RefreshTokensRepository extends Repository<RefreshToken> {}