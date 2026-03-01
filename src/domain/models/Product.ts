import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Delivery } from './Delivery';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column()
  description: string;

  @Column()
  img: string;

  @OneToMany(() => Delivery, (delivery) => delivery.product)
  deliveries: Delivery[];
}
