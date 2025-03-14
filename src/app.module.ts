import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/config/enviroment/enviroment-config.module';
import { JwtModule } from '@nestjs/jwt';
import { UsersUseCasesProxyModule } from './infrastructure/usecases-proxy/users.usecases-proxy.module';
import { LoggerModule } from './infrastructure/services/logger/logger.module';
import { ControllersModule } from './infrastructure/controllers/controllers.module';
import { BCryptModule } from './infrastructure/services/bcrypt/bcrypt.module';
import { JWTModule as JWTServiceModule } from './infrastructure/services/jwt/jwt.module';
import { AuthUseCasesProxyModule } from './infrastructure/usecases-proxy/auth.usecases-proxy.module';

@Module({
    imports: [
        UsersUseCasesProxyModule.register(),
        AuthUseCasesProxyModule.register(),

        EnvironmentConfigModule,
        
        JwtModule.register({ secret: process.env.JWT_SECRET }),
        JWTServiceModule,
        
        BCryptModule,
        LoggerModule,
        
        ControllersModule,
    ],
    controllers: [],
    providers: [],
    
})
export class AppModule {}
