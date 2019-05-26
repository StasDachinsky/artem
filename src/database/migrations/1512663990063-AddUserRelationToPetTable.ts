import { DeepPartial, MigrationInterface, QueryRunner, Repository } from 'typeorm';
import { migrations_mockData, saveToRepArray } from '../data';
import { Category } from '../../api/models/Category';
import { Customer } from '../../api/models/Customer';
import { Order } from '../../api/models/Order';
import { Product } from '../../api/models/Product';



export class AddUserRelationToproductTable1512663990063 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const categoryRepository = queryRunner.connection.getRepository(Category);
        const customerRepository = queryRunner.connection.getRepository(Customer);
        const orderRepository = queryRunner.connection.getRepository(Order);
        const productRepository = queryRunner.connection.getRepository(Product);

        const {categories, customers, orders, products} = migrations_mockData;

        const init_customers:any = customers.map(x => ({...x, orders: []}));
        const init_category:any = categories.map(x => ({...x, products: []}));
        const init_products:any = products.map(x => ({...x, category: {id: x.categoryId}}));
        const init_orders:any = orders.map(x => ({
            ...x,
            customer: {id: x.customerId},
            // @ts-ignore
            products: x.products.map(y => ({id: y.id}))
        }));

        const savedCustomers = await saveToRepArray(customerRepository, init_customers);
        const savedCategories = await saveToRepArray(categoryRepository, init_category);
        const savedProducts = await saveToRepArray(productRepository, init_products);
        const savedOrders = await saveToRepArray(orderRepository, init_orders);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {

    }

}


