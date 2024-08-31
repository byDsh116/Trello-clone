import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize/dist";
import { Commentary } from "./commentary.model";
import { CreateCommentaryDto } from "./dto/create-commentary.dto";
import { UpdateCommentaryDto } from "./dto/update-commentary.dto";

@Injectable()
export class CommentaryService {
    constructor(
        @InjectModel(Commentary)
        private commentaryModel: typeof Commentary
    ) { }

    async create(createCommentaryDto: CreateCommentaryDto): Promise<Commentary> {
        const commentary = new Commentary()
        commentary.text = createCommentaryDto.text
        commentary.cardId = createCommentaryDto.cardId
        commentary.userId = createCommentaryDto.userId
        return commentary.save()
    }

    async findAll(): Promise<Commentary[]> {
        return this.commentaryModel.findAll();
    }

    async findByPk(id: number): Promise<Commentary> {
        return this.commentaryModel.findByPk(id);
    }

    async update(id: number, updateCommentaryDto: UpdateCommentaryDto): Promise<Commentary> {
        const commentary = await this.findByPk(id);
        commentary.text = updateCommentaryDto.text || commentary.text;
        return commentary.save();
    }

    async remove(id: number): Promise<void> {
        const commentary = await this.commentaryModel.findByPk(id)
        await commentary.destroy()
    }
}