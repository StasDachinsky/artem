import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './Order';

@Entity()
export class Customer {
	@PrimaryGeneratedColumn()public id: string;

    @Column()
    public email: string;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

    @Column()
    public mobile: string;

    @Column()
    public membership: boolean;

    @Column()
    public rewards: number;

    @Column({nullable: true})
    public avatar: string;

    @OneToMany(type => Order, order => order.customer, {nullable: true})
    orders: Order[]
}
