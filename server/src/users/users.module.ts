import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./user.model";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [SequelizeModule.forFeature([User])],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule { }