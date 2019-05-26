import {
    Authorized, Body, Delete, Get, JsonController, Param, Post, Put
} from 'routing-controllers';

import { Product } from '../models/Product';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Repository } from 'typeorm';
import { Order } from '../models/Order';
import { Customer } from '../models/Customer';
import { saveToRepArray } from '../../database/data';
// @Authorized()
import * as datefns from 'date-fns';

@JsonController('/orders')
export class OrderController {

    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,    ) { }

    @Get()
    public find(): Promise<Order[]> {
        return this.orderRepository.find({relations: ['customer', 'products']});
    }

    @Get("/:id")
    public findOne(@Param('id') id: number,): Promise<Order> {
        return this.orderRepository.findOne(id, {relations: ['customer', 'products']});
    }

    @Post()
    // @ts-ignore
    public async create(@Body()order: any): Promise<Order> {
        console.log('order', order);
        const newOrder = [{
            amount: order.price || order.amount,
            reference: order.reference,
            quantity: order.quantity || order.unitInStock,
            shippedDate: order.shippedDate ||  datefns.format(new Date(), 'YYYY-MM-DD'),
            customer: {id: order.customer.id},
            products: order.products.map(x => ({id: x.id})),
            orderDate: datefns.format(new Date(), 'YYYY-MM-DD'),
            shipAddress: {
                address: order.address,
                city: order.city,
                country: order.country,
                zipcode: order.zipcode,
            }
        }];

        console.log('new', newOrder[0])

        const saved:any = await saveToRepArray(this.orderRepository, newOrder);
        return this.orderRepository.findOne(saved[0].id, {relations: ['customer', 'products']});
    }

    @Put('/:id')
    // @ts-ignore
    public async update(@Param('id') id: string, @Body() order: any): Promise<Order> {
        const newOrder = [{
            id: id,
            reference: order.reference,
            amount: order.price || order.amount,
            quantity: order.quantity || order.unitInStock,
            shippedDate: order.shippedDate ||  datefns.format(new Date(), 'YYYY-MM-DD'),
            customer: {id: order.customer.id},
            products: order.products.map(x => ({id: x.id})),
            orderDate: datefns.format(new Date(), 'YYYY-MM-DD'),
            shipAddress: {
                address: order.address || order.shipAddress.address,
                city: order.city|| order.shipAddress.city,
                country: order.country|| order.shipAddress.country,
                zipcode: order.zipcode|| order.shipAddress.zipcode,
            }
        }];

        console.log('new', newOrder[0]);

        const saved:any = await saveToRepArray(this.orderRepository, newOrder);
        return this.orderRepository.findOne(saved[0].id, {relations: ['customer', 'products']});
        // return this.productRepository.update(id, product);
    }

    @Delete('/:id')
    public delete(@Param('id') id: string): Promise<any> {
        return this.orderRepository.delete(id);
    }

}
