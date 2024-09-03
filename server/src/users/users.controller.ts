import { Body, Controller, Get, Param, Post, Delete } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.model";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto)
    }

    @Get(':email')
    findOne(@Param('email') email: string): Promise<User> {
        return this.usersService.findByEmail(email)
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.usersService.remove(id);
    }
}