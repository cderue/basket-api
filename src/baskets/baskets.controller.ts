import { Controller, Get, Post, Body, Put, Param, Res, Delete, HttpStatus, Inject } from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { CreateBasketDto } from './dto/create-basket.dto';
import { UpdateBasketDto } from './dto/update-basket.dto';

@Controller('baskets')
export class BasketsController {
    constructor(@Inject('BasketsService') private readonly basketsService: BasketsService) {}

    @Post()
    async create(@Body() createBasketDto: CreateBasketDto) {
        return await this.basketsService.create(createBasketDto);
    }

    @Get(':id')
    async findById(@Param('id') id: number) {
        return await this.basketsService.findById(id);
        //return res.status(HttpStatus.OK).json(basket);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateBasketDto: UpdateBasketDto) {
        return `This action updates a #${id} basket`;
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return await this.basketsService.remove(id);
        //return res.status(HttpStatus.OK).json(basket)
    }
}
