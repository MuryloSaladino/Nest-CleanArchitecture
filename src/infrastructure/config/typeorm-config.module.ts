import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import EnvironmentConfigService from "./enviroment-config.service";
import { Module } from "@nestjs/common";

export const getTypeOrmModuleOptions = (config: EnvironmentConfigService): TypeOrmModuleOptions =>
(
    {
        type: 'postgres',
        url: config.getDatabaseURL(),
        entities: [__dirname + './../../**/*.entity{.ts,.js}'],
        synchronize: false,
        ssl: {
            rejectUnauthorized: false,
        },
    } as TypeOrmModuleOptions
);


@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [EnvironmentConfigService],
            inject: [EnvironmentConfigService],
            useFactory: getTypeOrmModuleOptions,
        }),
    ],
})
export class TypeOrmConfigModule {}