import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';
import { Request } from "express";

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') implements CanActivate{
    async canActivate(context:ExecutionContext):Promise<any> {
        const result = ( await super.canActivate(context)) as boolean;
        const request = context.switchToHttp().getRequest() as Request;

        await super.logIn(request);
        return result;
    }
}
