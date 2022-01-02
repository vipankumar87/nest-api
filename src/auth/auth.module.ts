import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {LocalStrategy} from "./strategies/local.strategy";
import {JwtStrategy} from "./strategies/jwt.strategy";
import { ConfigModule } from '@nestjs/config';
import {MongooseModule} from "@nestjs/mongoose";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {User, UserSchema} from "../currier/user/entities/user.entity";
import {SessionSerializer} from "./session.serializer";
import {UserService} from "../currier/user/user.service";
import {UserRepository} from "../currier/user/entities/user.repository";
import {Role, RoleSchema} from "../currier/role/entities/role.entity";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }, { name: Role.name, schema: RoleSchema}]),
    PassportModule.register({session: true}),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, UserRepository, LocalStrategy, JwtStrategy, SessionSerializer],
  exports: [AuthService]
})
export class AuthModule {}
