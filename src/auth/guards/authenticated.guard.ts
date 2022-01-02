import {CanActivate, ExecutionContext, Injectable} from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class AuthenticatedGuard implements CanActivate{
    async canActivate(context:ExecutionContext): Promise<any> {
        const request = context.switchToHttp().getRequest<Request>();
        return request.isAuthenticated();
    }
}