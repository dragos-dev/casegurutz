import { Controller, Logger, Post } from "@nestjs/common";

@Controller("auth")
export class UsersController {
    @Post("sign-up")
    async registration() {
        Logger.log(`USERS - REGISTRATION`)
    }

    @Post("sign-in")
    async login() {
        Logger.log(`USERS - LOGIN`)
    }
}