import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('banners')
class Banner {
  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column('')
  images:string;
}

export default Banner;
