import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { EnvironmentConfigService } from "src/infrastructure/config/enviroment/enviroment-config.service";
import { IJwtPayload, IJWTService } from "src/domain/adapters/jwt.interface";

@Injectable()
export class JWTService implements IJWTService {
    secretKey: string;
    expiresIn: string;
    
    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: EnvironmentConfigService
    ) {
        this.secretKey = this.configService.getJwtSecret();
        this.expiresIn = this.configService.getJwtExpirationTime();
    }

    
    extractToken(token: string): Promise<IJwtPayload> {
        return this.jwtService.verifyAsync(token, {
            secret: this.secretKey
        });
    }

    createToken(payload: IJwtPayload): string {
        return this.jwtService.sign(payload, {
            secret: this.secretKey
        });
    }
}
