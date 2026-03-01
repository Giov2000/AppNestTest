import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Delivery } from './Delivery';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: number;

  @OneToMany(() => Delivery, (delivery) => delivery.customer)
  deliveries: Delivery[]
}
