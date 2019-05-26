import {
    Authorized, Body, Delete, Get, JsonController, Param, Post, Put
} from 'routing-controllers';

import { Product } from '../models/Product';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Repository } from 'typeorm';
import { Customer } from '../models/Customer';
import { saveToRepArray } from '../../database/data';
// @Authorized()

@JsonController('/customers')
export class CustomerController {

    constructor(
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>   ) { }

    @Get()
    public find(): Promise<Customer[]> {
        return this.customerRepository.find();

    }


    @Get("/:id")
    public findOne(@Param('id') id: number,): Promise<Customer> {
        return this.customerRepository.findOne(id);
    }

    @Post()
    public async create(@Body() product: any): Promise<Customer> {
        const data: any = await saveToRepArray(this.customerRepository, [product].map(x => ({
            ...x,
            // name: x.product,
            // unitInStock: x.quantity,
            // category: { id: x.categoryId }
        })));
        return this.customerRepository.findOne(data.id);
    }

    @Put('/:id')
    public async update(@Param('id') id: string, @Body() product: any): Promise<Customer> {
        const data: any = await saveToRepArray(this.customerRepository, [product]);
        return this.customerRepository.findOne(data.id);
    }


    @Delete('/:id')
    public delete(@Param('id') id: string): Promise<any> {
        return this.customerRepository.delete(id);
    }

}
