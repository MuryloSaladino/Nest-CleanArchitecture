import { NestFactory } from '@nestjs/core';
import AppModule from './app.module';
import validationPipe from './application/pipes/validation.pipe';
import setupSwagger from './application/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix("/v1/api");

    app.useGlobalPipes(validationPipe);

    setupSwagger(app);

    await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
