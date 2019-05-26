import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, ManyToOne, RelationId } from 'typeorm';
import { Category } from './Category';
import { Order } from './Order';

@Entity()
export class Product {
	@PrimaryGeneratedColumn()public id: string;

    @IsNotEmpty()
    @Column()
    public name: string;

    @Column({ nullable: true })
    public text: string;

    @Column({ type: "numeric" })
    public price: number;

    @Column({nullable: true})
    public unitInStock: number;

    @ManyToOne(type => Category, cat => cat.products)
    category: Category;

    @RelationId((prod: Product) => prod.category)
    categoryId: number;

    @ManyToMany(type => Order, order => order.products)
    orders: Order[];
}


// const recentProducts = [
//     { id: 1, name: "Samsung TV", text: "Samsung 32 1080p 60Hz LED Smart HDTV." },
//     { id: 2, name: "Playstation 4", text: "PlayStation 3 500 GB System" },
//     { id: 3, name: "Apple iPhone 6", text: "Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G " },
//     { id: 4, name: "Apple MacBook", text: "Apple MacBook Pro MD101LL/A 13.3-Inch Laptop" }
// ];
//

// { id: 1, name: "Product 1", price: "$50.00", category: "Category 1" },
// { id: 2, name: "Product 2", price: "$150.00", category: "Category 2" },
// { id: 3, name: "Product 3", price: "$250.00", category: "Category 3" },
// { id: 4, name: "Product 4", price: "$70.00", category: "Category 4" },
// { id: 5, name: "Product 5", price: "$450.00", category: "Category 5" },
// { id: 6, name: "Product 6", price: "$950.00", category: "Category 6" },
// { id: 7, name: "Product 7", price: "$550.00", category: "Category 7" },
// { id: 8, name: "Product 8", price: "$750.00", category: "Category 8" },
// { id: 9, name: "Product 6", price: "$950.00", category: "Category 6" },
// { id: 10, name: "Product 7", price: "$550.00", category: "Category 7" },
// { id: 11, name: "Product 8", price: "$750.00", category: "Category 8" }
