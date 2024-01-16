import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { User } from './User';
import { Store } from './Store';
import { ProductDelivery } from 'src/dtos/request/CreateDeliveryDto';

@Entity('delivery')
export class Delivery {
  @PrimaryGeneratedColumn('uuid')
  develiry_id: string;

  @Column({
     nullable: false
  })
  delivery_status: number

  @Column({
    nullable: false
  })
  delivery_store: string

  @Column({
    nullable: false,
    type: 'json'
  })
  product_delivery: ProductDelivery[]

  @Column({
    nullable: false
  })
  delivery_client: string

  @ManyToOne(type => User, (user) => user.user_id)
  @JoinColumn({
    name: 'delivery_client'
  })
  client: User;

  @ManyToOne(type => Store, (store) => store.store_id)
  @JoinColumn({
    name: 'delivery_store'
  })
  store: Store;

  
  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  public updated_at: Date;
}
