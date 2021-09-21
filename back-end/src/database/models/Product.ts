import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    productName:string;

    @Column('array')
    images:Array<String>;

    @Column()
    price:string;

    @Column()
    category:String
}

export default Product;
