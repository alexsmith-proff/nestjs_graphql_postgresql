import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = await app.get(ConfigService)
  const port = config.get<number>('API_PORT')
  // app.enableCors()
  // app.setGlobalPrefix('api')
  await app.listen(port || 3000, () => {
    console.log(`App started on port: ${port}`)
  });
}
bootstrap();
