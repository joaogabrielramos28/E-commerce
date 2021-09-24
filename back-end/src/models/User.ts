import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @Column('int')
    age:Number

    @Column()
    name:string

    @Column()
    avatar?:string
}

export default User;
