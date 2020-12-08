import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { ApiBody, ApiQuery, ApiResponse } from '@nestjs/swagger/dist';
import BookEntity from 'src/db/entity/book.entity';
import CreateBookDto from 'src/user/dto/create-book.dto';
import { BooksService } from './books.service';

@Controller('book')
export default class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @ApiResponse({
    status: 201, 
    description: 'returns the created book with its genres'
  })
  @Post('post')
  postGenre( @Body() book: CreateBookDto) {
    return this.bookService.insert(book);
  }

  @ApiResponse({
    status: 200, 
    description: 'returns all the books'
  })
  @Get()
  getAll() {
    return this.bookService.getAllBooks();
  }


  @ApiResponse({
    status: 200, 
    description: 'removes the book with provided book ID and returns the book name'
  })
  @ApiQuery({
    name: 'bookID', 
    required: true,
    type: Number, 
    description: 'id of the book you want to remove'
  })
  @Delete('delete')
  deleteBook(@Query('bookID') bookID): Promise<BookEntity> {
    return this.bookService.delete(bookID);
  }

  @ApiResponse({
    status: 200,
    description: 'updates the book given its book id and the book object that has to be replaced'
  })
  @ApiQuery({
    name: 'bookID', 
    required: true,
    type: Number, 
    description: 'id of the book you want to update'
  })
  @Put('update')
  updateBook(@Query('bookID') bookID, @Body() book: CreateBookDto): Promise<BookEntity> {
    return this.bookService.update(bookID, book);
  }
}