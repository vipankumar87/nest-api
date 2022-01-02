import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from './create-role.dto';
import {IsNotEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({required:true})
    name:string
}
