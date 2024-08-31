import { SequelizeModule } from "@nestjs/sequelize";
import { TaskColumn } from "./column.model";
import { TaskColumnController } from "./columns.controller";
import { Module } from "@nestjs/common";
import { TaskColumnService } from "./columns.service";

@Module({
    imports: [SequelizeModule.forFeature([TaskColumn])],
    controllers: [TaskColumnController],
    providers: [TaskColumnService],
})
export class TaskColumnModule { }