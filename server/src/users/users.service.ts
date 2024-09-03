import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./user.model";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const user = new User()
        user.email = createUserDto.email
        user.password = createUserDto.password
        return user.save()
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.userModel.findOne({ where: { email } });
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }

    async remove(id: number): Promise<void> {
        const user = await this.userModel.findByPk(id);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        await user.destroy()
    }
}