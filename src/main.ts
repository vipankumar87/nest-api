import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import * as cookieParser from "cookie-parser";
import * as session from "express-session";
import * as passport from "passport";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(helmet());
  app.enableCors();
  app.use(cookieParser());
  app.use(
      session({
        secret: process.env.APP_SECRET,
        resave: false,
        saveUninitialized: false,
      }),
  );
  // app.use(csurf());
    app.use(passport.initialize());
    app.use(passport.session());

    app.setGlobalPrefix('api');
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
