import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './currier/user/user.module';
import { RoleModule } from './currier/role/role.module';
import { CurrierTypeModule } from './currier/currier-type/currier-type.module';
import { CurrierUnitModule } from './currier/currier-unit/currier-unit.module';
import { CurrierModule } from './currier/currier.module';
import { AuthModule } from './auth/auth.module';
import {ThrottlerModule} from "@nestjs/throttler";

let envFilePath = '.env';
console.info(`Running in ${process.env.MODE}`);
if( process.env.MODE == 'development'){
  envFilePath = '.env.development';
} else if(process.env.MODE == 'production'){
  envFilePath = '.env.production';
}
envFilePath = '.env';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      dbName: process.env.DB,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    }),
    UserModule,
    RoleModule,
    CurrierTypeModule,
    CurrierUnitModule,
    CurrierModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
