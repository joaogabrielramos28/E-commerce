import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('banners')
class Banner {
  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column('simple-array')
  images:string;
}

export default Banner;
