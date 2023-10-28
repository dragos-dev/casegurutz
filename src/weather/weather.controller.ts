import { Controller, Logger, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Action } from "./action.entity";
import { Repository } from "typeorm";

@Controller("weather")
export class WeatherController {
    constructor(
        @InjectRepository(Action)
        private actionRepository: Repository<Action>,
      ) {}
    
    @Post("current")
    async currentWeather() {
        Logger.log(`WEATHER - CURRENT`)
    }
}