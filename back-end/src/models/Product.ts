import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name:string;

    @Column('simple-array')
    images:Array<string>

    @Column()
    price:string;

    @Column()
    category:string

    @Column()
    mainImage:string;
}

export default Product;
