import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Commentary } from "./commentary.model";
import { CommentaryController } from "./commentary.controller";
import { CommentaryService } from "./commentary.service";

@Module({
    imports: [SequelizeModule.forFeature([Commentary])],
    controllers: [CommentaryController],
    providers: [CommentaryService],
})
export class CommentaryModule { }