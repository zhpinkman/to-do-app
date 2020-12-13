import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import TaskEntity from './task.entity';

@Entity()
export default class CategoryEntity extends BaseEntity 
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @OneToMany(() => TaskEntity, task => task.category, {
        // eager: true
    })
    tasks: TaskEntity[];

}