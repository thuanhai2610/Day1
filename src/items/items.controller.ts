import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ItemsService } from './items.service';
@Controller('items')
export class ItemsController {
    constructor(
        private readonly itemsService: ItemsService
    ) {}
    @Get()
    findAll() {
        return this.itemsService.findAll();
    }
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.itemsService.findOne(id)
    }
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, 
    @Body()
    body: { name: string, description: string}) {
         return this.itemsService.update(id, body.name, body.description);

    };
    @Post()
    create(@Body() body: {
        name: string,
        description: string
    }) {
        return this.itemsService.create(body.name, body.description)
    };
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number)
    {
        this.itemsService.delete(id);
        return{ message: "Item Delete"}
    }
}
