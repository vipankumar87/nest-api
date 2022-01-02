import { PartialType } from '@nestjs/swagger';
import { AuthCredentialsDto } from './auth.dto';

export class UpdateAuthDto extends PartialType(AuthCredentialsDto) {}
