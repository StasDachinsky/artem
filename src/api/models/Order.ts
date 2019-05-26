import { Column, Entity, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn, JoinColumn, RelationId, JoinTable } from 'typeorm';
import { Customer } from './Customer';
import { Product } from './Product';
import { ShipAddress } from './ShipAddress';

@Entity()
export class Order {
	@PrimaryGeneratedColumn()id: string;

    @Column({nullable: true})
    reference: string;

    @Column({ type: "numeric", nullable: true })
    amount: number;

    @Column({ type: "numeric", nullable: true })
    quantity: number;

    @Column()
    orderDate: string;

    @Column()
    shippedDate: string;

    @OneToOne(type => ShipAddress, address => address.order, { cascade: true, eager: true, onDelete: 'CASCADE', nullable: true })
    @JoinColumn()
    shipAddress: ShipAddress;

    @ManyToOne(type => Customer, customer => customer.orders, {onDelete: 'CASCADE'})
    customer: Customer;

    @RelationId((x: Order) => x.customer)
    customerId: number;

    @ManyToMany(type => Product, prod => prod.orders)
    @JoinTable()
    products: Product[];

}

