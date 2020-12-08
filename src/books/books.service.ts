import { promises } from 'fs';
import BookEntity from 'src/db/entity/book.entity';
import GenreEntity from 'src/db/entity/genre.entity';
import UserEntity from 'src/db/entity/user.entity';
import CreateBookDto from 'src/user/dto/create-book.dto';
import { createQueryBuilder, DeleteResult, getConnection } from 'typeorm';

export class BooksService {

  async insert(bookDetails: CreateBookDto): Promise<BookEntity> {
    const { name , userID , genreIDs } = bookDetails;
    const book = new BookEntity();
    book.name = name;
    book.user = await UserEntity.findOne(userID) ;
    book.genres=[];
    for ( let i = 0; i < genreIDs.length ; i++)
    {
             const genre = await GenreEntity.findOne(genreIDs[i]);
             book.genres.push(genre);
    }
    await book.save();
    return book;
  }
  async getAllBooks(): Promise<BookEntity[] > {
    // const user: UserEntity = await UserEntity.findOne({where: {id: 2}, relations: ['books']});
    return BookEntity.find();
  }

  async delete(bookID: number): Promise<BookEntity> {
    const book = await BookEntity.findOne(bookID);
    return book.remove();
  }

  async update(bookID: number, bookDetails: CreateBookDto): Promise<BookEntity> {
    const book = await BookEntity.findOne(bookID);
    book.name = bookDetails.name;
    book.user = await UserEntity.findOne(bookDetails.userID);
    book.genres=[];
    for ( let i = 0; i < bookDetails.genreIDs.length ; i++)
    {
             const genre = await GenreEntity.findOne(bookDetails.genreIDs[i]);
             book.genres.push(genre);
    }
    await book.save();
    return book;
  }
}