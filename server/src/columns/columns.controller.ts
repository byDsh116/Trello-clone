import { Body, Controller, Delete, Post, Get, Param, Put } from "@nestjs/common";
import { TaskColumnService } from "./columns.service";
import { CreateTaskColumnDto } from "./dto/create-column.dto";
import { TaskColumn } from "./column.model";
import { UpdateTaskColumnDto } from "./dto/update-column.dto";


@Controller('columns')
export class TaskColumnController {
    constructor(private readonly taskColumnService: TaskColumnService) { }

    @Post()
    create(@Body() createTaskColumnDto: CreateTaskColumnDto): Promise<TaskColumn> {
        return this.taskColumnService.create(createTaskColumnDto)
    }

    @Get()
    findAll(): Promise<TaskColumn[]> {
        return this.taskColumnService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<TaskColumn> {
        return this.taskColumnService.findByPk(id)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateTaskColumnDto: UpdateTaskColumnDto): Promise<TaskColumn> {
        return this.taskColumnService.update(id, updateTaskColumnDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.taskColumnService.remove(id)
    }
}