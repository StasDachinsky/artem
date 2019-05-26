import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import uuid from 'uuid';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Product } from '../models/Product';
import { ProductRepository } from '../repositories/ProductRepository';

@Service()
export class ProductService {

    constructor(
        @OrmRepository() private itemRepository: ProductRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public find(): Promise<Product[]> {
        this.log.info('Find all products');
        return this.itemRepository.find();
    }

    public async create(product: Product): Promise<Product> {
        this.log.info('Create a new product => ', product.name);
        product.id = uuid.v1();
        const newproduct = await this.itemRepository.save(product);
        return newproduct;
    }

    public update(id: string, product: Product): Promise<Product> {
        this.log.info('Update a product');
        product.id = id;
        return this.itemRepository.save(product);
    }

    public async delete(id: string): Promise<void> {
        this.log.info('Delete a product');
        await this.itemRepository.delete(id);
        return;
    }

}
