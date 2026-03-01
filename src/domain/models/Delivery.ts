import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from './Customer';
import { Product } from './Product';

@Entity()
export class Delivery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerId: number;

  @Column()
  productId: number;

  @Column()
  amount: number;

  @ManyToOne(() => Customer, (customer) => customer.deliveries)
  customer: Customer;

  @ManyToOne(() => Product, (product) => product.deliveries)
  product: Product;
}
