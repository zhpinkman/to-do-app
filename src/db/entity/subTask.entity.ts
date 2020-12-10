import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import UserEntity from './user.entity';
import GenreEntity from './genre.entity';
import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { type } from 'os';
import { Optional } from '@nestjs/common';
import TaskEntity from './task.entity';

@Entity()
export default class SubTaskEntity extends BaseEntity 
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    description: string;

    @ManyToOne(type => TaskEntity, task => task.subTasks)
    parent: TaskEntity;

}