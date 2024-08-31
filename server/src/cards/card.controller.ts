import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { CardService } from "./card.service";
import { CreateCardDto } from "./dto/create-card.dto";
import { Card } from "./card.model";
import { UpdateCardDto } from "./dto/update-card.dto";




@Controller('cards')
export class CardController {
    constructor(private readonly cardService: CardService) { }

    @Post()
    create(@Body() createCardDto: CreateCardDto): Promise<Card> {
        return this.cardService.create(createCardDto)
    }

    @Get()
    findAll(): Promise<Card[]> {
        return this.cardService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Card> {
        return this.cardService.findByPk(id)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateCardDto: UpdateCardDto): Promise<Card> {
        return this.cardService.update(id, updateCardDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.cardService.remove(id)
    }
}