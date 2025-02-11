import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DatabaseConfig } from "src/domain/interfaces/database.interface";

@Injectable()
export default class EnvironmentConfigService implements DatabaseConfig {
    constructor(
        private readonly configService: ConfigService
    ) {}
    
    
    public getDatabaseURL(): string {
        return this.configService.get<string>("DB_URL") || "";
    }

    public getDatabaseSync(): boolean {
        return this.configService.get<string>("NODE_ENV") === "dev";
    }
}