import { Injectable, NotFoundException  } from '@nestjs/common';

export interface Item {
    id: number;
    name: String;
    description: String,
}
@Injectable()
export class ItemsService {
    private items: Item[] = [];
    findAll(): Item[] {
        return this.items
    }
    findOne(id: number): Item{
        const item = this.items.find((item) => item.id === id );
        if (!item) throw new NotFoundException('Item not found');
        return item;
    }
    create(name: String, description: string ): Item{
        const newItem: Item = {id: Date.now(), name, description};
        this.items.push(newItem)
        return newItem;
    } 
    update(id: number, name: string, description: string): Item{
        const itemIndex = this.items.findIndex((item) => item.id === id);
        if (itemIndex === -1) throw new NotFoundException('Item not found')
            this.items[itemIndex] = {id, name, description};
        return this.items[itemIndex]
    }
    delete(id: number): void{
        const itemIndex = this.items.findIndex((item) => item.id === id);
        if (itemIndex === -1) throw new NotFoundException('Item not found')
            this.items.splice(itemIndex, 1);
    }
}
