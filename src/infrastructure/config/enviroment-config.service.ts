import { ConfigService } from "@nestjs/config";
import { DatabaseConfig } from "src/domain/interfaces/database.interface";

export default class EnvironmentConfigService implements DatabaseConfig {
    constructor(
        private readonly configService: ConfigService
    ) {}
    
    
    public getDatabaseURL(): string {
        return this.configService.get<string>("DB_URL") || "";
    }

    public getDatabaseSync(): boolean {
        return this.configService.get<string>("LOCAL_ENV") === "dev";
    }
}