import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import TaskEntity from './task.entity';

@Entity()
export default class SubTaskEntity extends BaseEntity 
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    description: string;

    @ManyToOne(() => TaskEntity, task => task.subTasks, {
        onDelete: 'CASCADE'
    })
    task: TaskEntity;

}