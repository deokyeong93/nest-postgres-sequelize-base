import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { SERVER_PORT, API_VERSION } = process.env;

  app.setGlobalPrefix(API_VERSION);
  await app.listen(SERVER_PORT, () => {
    console.log(
      `🚀 서버를 가동하겠습니다. http://localhost:${SERVER_PORT}/${API_VERSION}`,
    );
  });
}
bootstrap();
