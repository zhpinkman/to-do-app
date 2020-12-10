import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import UserEntity from './user.entity';
import { Optional } from '@nestjs/common';
import CategoryEntity from './category.entity';
import LabelEntity from './label.entity';

@Entity()
export default class TaskEntity extends BaseEntity 
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @ManyToOne(() => CategoryEntity, category => category.tasks, {
        eager: true
    })
    category: CategoryEntity;

    @Optional()
    @ManyToMany(() => LabelEntity, {
        eager: true
    })
    @JoinTable()
    labels: LabelEntity[];


    @Optional()
    @Column({ length: 500 })
    description: string;

    @ManyToOne(() => UserEntity, user => user.tasks)
    user: UserEntity;

    @Optional()
    @Column({ length: 1000 })
    subTasks: string;

}