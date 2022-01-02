import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import {ApiBody} from "@nestjs/swagger";
import {AuthenticatedGuard} from "./guards/authenticated.guard";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(
      @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto
  ): Promise<void> {
    return await this.authService.signUp(authCredentialsDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  @ApiBody({ type: AuthCredentialsDto })
  async signIn(@Request() req, @Body(ValidationPipe) user: AuthCredentialsDto) {
    return req.user;
  }

  @UseGuards(AuthenticatedGuard)
  @Get('me')
  getMe(@Request() req) {
    return req.user;
  }

  @Get('redirect')
  redirect(@Request() req:Request):any{

  }
}
