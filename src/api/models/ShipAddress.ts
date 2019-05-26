import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './Order';

@Entity()
export class ShipAddress {
	@PrimaryGeneratedColumn()public id: string;

    @Column()
    public address: string;

    @Column()
    public city: string;

    @Column()
    public zipcode: string;

    @Column()
    public country: string;

    @OneToOne(type => Order, order => order.shipAddress, { onDelete: 'CASCADE'})
    order: Order
}

const order =  { "address": "Gran Vía, 0123", "city": "Madrid", "zipcode": "10298", "country": "Spain" };
