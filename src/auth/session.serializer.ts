import {Injectable} from "@nestjs/common";
import {PassportSerializer} from "@nestjs/passport";
import {UserService} from "../currier/user/user.service";

@Injectable()
export class SessionSerializer extends PassportSerializer{
    constructor(private userService: UserService) {
        super();
    }
    serializeUser(user: any, done: Function): any {
        done(null, {id: user.id, username: user.username, email: user.email});
    }
    deserializeUser(payload: any, done: Function): any {
        const user = this.userService.findOne(payload.id);
        done(null, user)
    }
}