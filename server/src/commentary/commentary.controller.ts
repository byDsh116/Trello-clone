import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { CommentaryService } from "./commentary.service";
import { CreateCommentaryDto } from "./dto/create-commentary.dto";
import { Commentary } from "./commentary.model";
import { UpdateCommentaryDto } from "./dto/update-commentary.dto";

@Controller('commentary')
export class CommentaryController {
    constructor(private readonly commentaryService: CommentaryService) { }

    @Post()
    create(@Body() createCommentaryDto: CreateCommentaryDto): Promise<Commentary> {
        return this.commentaryService.create(createCommentaryDto)
    }

    @Get()
    findAll(): Promise<Commentary[]> {
        return this.commentaryService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Commentary> {
        return this.commentaryService.findByPk(id)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateCommentaryDto: UpdateCommentaryDto): Promise<Commentary> {
        return this.commentaryService.update(id, updateCommentaryDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.commentaryService.remove(id)
    }
}

