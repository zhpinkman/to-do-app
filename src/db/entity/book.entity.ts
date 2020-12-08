import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import UserEntity from './user.entity';
import GenreEntity from './genre.entity';
import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';

@Entity()
export default class BookEntity extends BaseEntity 
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @ManyToOne(type => UserEntity, user => user.books)
  user: UserEntity;


  @ManyToMany(type => GenreEntity)
  @JoinTable()
  genres: GenreEntity[];
}