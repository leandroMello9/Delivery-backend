import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './User';
import { Product } from './Product';

@Entity('store')
export class Store {
  @PrimaryGeneratedColumn('uuid')
  store_id: string;


  @Column()
  provider_id: string;



  @OneToOne(type => User)
  @JoinColumn({
    name: 'provider_id'
  })
  provider: User;

  @Column({
    nullable: false,
    unique: true,
  })
  store_name: string;
  
  @Column({nullable: false})
  store_isOpen: boolean;

  @Column({nullable: false})
  store_isActivit: boolean;


  @Column({ type: 'json', nullable: false })
  product_list: Product[]

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  public updated_at: Date;
}
