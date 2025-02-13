import { Module } from "@nestjs/common";
import JWTService from "./jwt.service";
import { EnvironmentConfigModule } from "src/infrastructure/config/enviroment/enviroment-config.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [EnvironmentConfigModule, JwtModule],
    providers: [JWTService],
    exports: [JWTService],
})
export default class JWTModule {}
