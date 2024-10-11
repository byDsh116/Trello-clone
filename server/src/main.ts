
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   const config = new DocumentBuilder()
//     .setTitle('Trello-clone API')
//     .setDescription('API documentation for trello-clone application')
//     .build()

//   const document = SwaggerModule.createDocument(app, config)
//   SwaggerModule.setup('api', app, document)

//   app.enableCors()
//   await app.listen(3000);
// }
// bootstrap();



import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.enableCors()
  await app.listen(3000);
  console.log('SERVER STARTED ON PORT 3000')
}

bootstrap();
