import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as csurf from 'csurf';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(helmet());
  app.enableCors();
  // app.use(csurf());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
