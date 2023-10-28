import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Action } from "./action.entity";
import { WeatherController } from "./weather.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([Action]),
    ],
    controllers: [
        WeatherController
    ]
})
export class WeatherModule {}