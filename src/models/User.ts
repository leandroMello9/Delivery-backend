import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, Timestamp, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;
  @Column({
    nullable: false,
    unique: true,
  })
  user_email: string;
  
  @Column({nullable: false})
  user_password: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  public updated_at: Date;
}
