import { userInfo } from 'os';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import BookEntity from './book.entity';
import TaskEntity from './task.entity';
@Entity()
export default class UserEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 100 })
  password: string;

  @OneToMany( type => BookEntity, book => book.user)
  books: BookEntity[];

  @OneToMany(type => TaskEntity, task => task.user)
  tasks: TaskEntity[];
}