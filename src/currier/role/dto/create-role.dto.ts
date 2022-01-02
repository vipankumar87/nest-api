import {IsBoolean, IsDate, IsNotEmpty, IsOptional, IsString} from "class-validator";
import { ApiProperty } from '@nestjs/swagger'

export class CreateRoleDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({required:true})
    name:string

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({required: true})
    status: boolean

    @IsDate()
    @IsOptional()
    @ApiProperty({required: false})
    created_at: Date
}
