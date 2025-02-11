import { Module } from '@nestjs/common';
import UsersModule from './application/modules/users/users.module';
import { EnvironmentConfigModule } from './infrastructure/config/enviroment/enviroment-config.module';

@Module({
    imports: [
        EnvironmentConfigModule,
        UsersModule
    ],
    controllers: [],
    providers: [],
    
})
export default class AppModule {}
