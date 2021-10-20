import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('banners')
class Banner {
  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column('simple-array')
  images:Array<string>;
}

export default Banner;
