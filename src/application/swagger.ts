import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export default function setupSwagger(app: INestApplication) {

    const options = new DocumentBuilder()
        .setTitle('KanBosch API')
        .setDescription('The backend application for the KanBosch app')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/docs', app, document);
}