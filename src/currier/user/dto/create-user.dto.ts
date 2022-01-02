import {IsArray, IsBoolean, IsDate, IsInt, isInt, IsString} from "class-validator";
import { ApiProperty } from '@nestjs/swagger'
import {ObjectId} from "mongoose";
import * as mongoose from "mongoose";
import {Role} from "../../role/entities/role.entity";

export class CreateUserDto {
    @IsString()
    @ApiProperty({description: "", required: true})
    readonly username: string

    @IsString()
    @ApiProperty({description: "", required: true})
    readonly email: string

    @IsString()
    @ApiProperty({description: "", required: true})
    readonly first_name: string

    @IsString()
    @ApiProperty({description: "", required: true})
    readonly password: string

    @IsString()
    @ApiProperty({description: "", required: true})
    readonly last_name: string

    @IsBoolean()
    @ApiProperty({description: "", default: true})
    readonly status: boolean

    @IsDate()
    @ApiProperty({description: ""})
    readonly verified_at: Date

    @IsString()
    @ApiProperty({description: "", required: true})
    readonly role: { type: mongoose.Schema.Types.ObjectId, ref: Role }
}
