import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import AppModule from './app.module';
import validationPipe from './application/pipes/validation.pipe';
import setupSwagger from './application/swagger';
import { LoggerService } from './application/services/logger.service';
import AllExceptionsFilter from './application/filters/exception.filter';
import ResponseInterceptor from './application/interceptors/response.interceptor';
import { LoggingInterceptor } from './application/interceptors/logging.interceptor';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix("/v1/api");

    app.useGlobalPipes(validationPipe);

    app.useGlobalInterceptors(new ResponseInterceptor());
    app.useGlobalInterceptors(new LoggingInterceptor(new LoggerService()));

    app.useGlobalFilters(new AllExceptionsFilter(new LoggerService()));

    setupSwagger(app);

    await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
