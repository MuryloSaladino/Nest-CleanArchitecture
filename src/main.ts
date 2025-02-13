import { NestFactory } from '@nestjs/core';
import AppModule from './app.module';
import validationPipe from './infrastructure/common/pipes/validation.pipe';
import LoggerService from './infrastructure/services/logger/logger.service';
import ResponseInterceptor from './infrastructure/common/interceptors/response.interceptor';
import { LoggingInterceptor } from './infrastructure/common/interceptors/logging.interceptor';
import AllExceptionsFilter from './infrastructure/common/filters/exception.filter';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import setupSwagger from './infrastructure/common/swagger/swagger.setup';

async function bootstrap() {
    const env = process.env.NODE_ENV;
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

    // Filters
    app.useGlobalFilters(new AllExceptionsFilter(new LoggerService()));
    
    // Pipes
    app.useGlobalPipes(validationPipe);

    // Interceptors
    app.useGlobalInterceptors(new ResponseInterceptor());
    app.useGlobalInterceptors(new LoggingInterceptor(new LoggerService()));
    
    app.setGlobalPrefix("/api");

    if(env !== "prod") {
        setupSwagger(app);
    }

    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
