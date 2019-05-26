import {
    Authorized, Body, Delete, Get, JsonController, Param, Post, Put
} from 'routing-controllers';

import { Product } from '../models/Product';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Repository } from 'typeorm';
import { Category } from '../models/Category';
// @Authorized()

@JsonController('/categories')
export class CategoryController {

    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,    ) { }

    @Get()
    public find(): Promise<Category[]> {
        return this.categoryRepository.find({relations: ['products']});
    }

    @Post()
    // @ts-ignore
    public create(@Body() product: Product): Promise<Product> {
        // return this.productRepository.create(product);
    }

    @Put('/:id')
    // @ts-ignore
    public update(@Param('id') id: string, @Body() product: Product): Promise<Product> {
        // return this.productRepository.update(id, product);
    }

    @Delete('/:id')
    // @ts-ignore
    public delete(@Param('id') id: string): Promise<void> {
        // return this.productRepository.delete(id);
    }

}
