import { Expose } from 'class-transformer';
import slugify from 'slugify';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description?: string;

  @Column()
  createBy: number;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt?: Date;

  @DeleteDateColumn()
  deleteAt?: Date;

  @Expose()
  get slug(): string {
    return `${slugify(this.name)}-${this.id}`;
  }

  constructor(partial: Partial<Genre>) {
    Object.assign(this, partial);
  }
}
