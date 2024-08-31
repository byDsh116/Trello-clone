import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Card } from "./card.model";
import { CreateCardDto } from "./dto/create-card.dto";
import { UpdateCardDto } from "./dto/update-card.dto";



@Injectable()
export class CardService {
    constructor(
        @InjectModel(Card)
        private cardModel: typeof Card
    ) { }

    async create(createCardDto: CreateCardDto): Promise<Card> {
        const card = new Card()
        card.title = createCardDto.title
        card.description = createCardDto.title
        card.columnId = createCardDto.columnId
        return card.save()
    }

    async findAll(): Promise<Card[]> {
        return this.cardModel.findAll();
    }

    async findByPk(id: number): Promise<Card> {
        return this.cardModel.findByPk(id);
    }

    async update(id: number, updateCardDto: UpdateCardDto): Promise<Card> {
        const card = await this.findByPk(id);
        card.title = updateCardDto.title || card.title;
        card.description = updateCardDto.title || card.description;
        return card.save();
    }

    async remove(id: number): Promise<void> {
        const card = await this.cardModel.findByPk(id)
        await card.destroy()
    }
}