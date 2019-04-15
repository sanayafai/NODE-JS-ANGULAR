import 'dotenv/config';
import {NestFactory} from '@nestjs/core';
import {INestApplication} from '@nestjs/common';
import {AppModule} from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const port = process.env.PORT || 4000;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
 /*   const options = new DocumentBuilder()
        .setTitle('ideas example')
        .setDescription('The Ideas API description')
        .setVersion('1.0')
        .addTag('ideas')
        .build();

    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup('api', app, document);*/

    app.enableCors({
        origin: [
            'http://localhost:4200' // angular
        ],
    });

    await app.listen(port);
}

bootstrap();
