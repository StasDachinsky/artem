import {
    Authorized, Body, Delete, Get, JsonController, Param, Post, Put
} from 'routing-controllers';

import { Product } from '../models/Product';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Repository } from 'typeorm';
import { Customer } from '../models/Customer';
import { saveToRepArray } from '../../database/data';
// @Authorized()

@JsonController('/products')
export class ProductController {

    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,    ) { }

    @Get()
    public find(): Promise<Product[]> {
        return this.productRepository.find({relations: ['category']});
    }

    @Get("/:id")
    public findOne(@Param('id') id: number,): Promise<Product> {
        return this.productRepository.findOne(id, {relations: ['category']});
    }

    @Post()
    // @ts-ignore
    public  async create(@Body() product: any): Promise<any> {
        const data:any = await saveToRepArray(this.productRepository, [product].map(x => ({...x, name: x.product, unitInStock: x.quantity, category: {id: x.categoryId}})));
        return this.productRepository.findOne(data.id, {relations: ['category']});
    }

    @Put('/:id')
    public async update(@Param('id') id: string, @Body() product: any): Promise<Product> {
        const data:any = await saveToRepArray(this.productRepository, [product].map(x => ({...x, name: x.product, unitInStock: x.quantity, category: {id: x.categoryId}})));
        return this.productRepository.findOne(id, {relations: ['category']});

    }

    @Delete('/:id')
    public delete(@Param('id') id: string): any {
        return this.productRepository.delete(id);
    }

}
