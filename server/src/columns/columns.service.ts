import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CreateTaskColumnDto } from "./dto/create-column.dto";
import { TaskColumn } from "./column.model";
import { UpdateTaskColumnDto } from "./dto/update-column.dto";


@Injectable()
export class TaskColumnService {
    constructor(
        @InjectModel(TaskColumn)
        private taskColumnModel: typeof TaskColumn
    ) { }

    async create(createColumnDto: CreateTaskColumnDto): Promise<TaskColumn> {
        const column = new TaskColumn()
        column.title = createColumnDto.title
        column.userId = createColumnDto.userId
        return column.save()
    }

    async findAll(): Promise<TaskColumn[]> {
        return this.taskColumnModel.findAll();
    }

    async findByPk(id: number): Promise<TaskColumn | null> {
        return this.taskColumnModel.findByPk(id);
    }

    async update(id: number, updateTaskColumnDto: UpdateTaskColumnDto): Promise<TaskColumn> {
        const column = await this.findByPk(id);
        column.title = updateTaskColumnDto.title || column.title;
        return column.save();
    }

    async remove(id: number): Promise<void> {
        const column = await this.taskColumnModel.findByPk(id)
        await column.destroy()
    }
}