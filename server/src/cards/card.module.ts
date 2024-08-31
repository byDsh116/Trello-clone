import { SequelizeModule } from "@nestjs/sequelize";
import { Module } from "@nestjs/common";
import { Card } from "./card.model";
import { CardController } from "./card.controller";
import { CardService } from "./card.service";


@Module({
    imports: [SequelizeModule.forFeature([Card])],
    controllers: [CardController],
    providers: [CardService],
})
export class CardModule { }