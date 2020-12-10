import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import UserEntity from './user.entity';
import { Optional } from '@nestjs/common';
import SubTaskEntity from './subTask.entity';
import CategoryEntity from './category.entity';
import LabelEntity from './label.entity';

@Entity()
export default class TaskEntity extends BaseEntity 
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @ManyToOne(type => CategoryEntity, category => category.task)
    category: CategoryEntity;

    @Optional()
    @ManyToMany(type => LabelEntity, label => label.tasks)
    labels: LabelEntity[];


    @Optional()
    @Column({ length: 500 })
    description: string;

    @ManyToOne(type => UserEntity, user => user.tasks)
    user: UserEntity;

    @Optional()
    @OneToMany(type => SubTaskEntity, subTask => subTask.parent)
    subTasks: SubTaskEntity[];

}