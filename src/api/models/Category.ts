import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './Product';

@Entity()
export class Category {
	@PrimaryGeneratedColumn()public id: string;

    @Column()
    public name: string;

    @Column()
    public description: string;

    @Column({nullable: true})
    public picture: string;

    @OneToMany(type => Product, product => product.category, {cascade: true})
    products: Product[]
}

