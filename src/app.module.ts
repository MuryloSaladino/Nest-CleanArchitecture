import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/config/enviroment/enviroment-config.module';
import { JwtModule } from '@nestjs/jwt';
import LoggerModule from './infrastructure/services/logger/logger.module';
import UseCasesProxyModule from './infrastructure/usecases-proxy/usecases-proxy.module';
import ControllersModule from './infrastructure/controllers/controllers.module';
import BCryptModule from './infrastructure/services/bcrypt/bcrypt.module';
import JWTServiceModule from './infrastructure/services/jwt/jwt.module';

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET,
        }),
        LoggerModule,
        UseCasesProxyModule.register(),
        ControllersModule,
        BCryptModule,
        JWTServiceModule,
        EnvironmentConfigModule,
    ],
    controllers: [],
    providers: [],
    
})
export default class AppModule {}
