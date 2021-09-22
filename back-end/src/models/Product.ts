import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name:string;

    @Column('simple-array')
    images:string[];

    @Column()
    price:string;

    @Column()
    category:string
}

export default Product;
