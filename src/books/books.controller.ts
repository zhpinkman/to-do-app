import { Body, Controller, Get, Post } from '@nestjs/common';
import CreateBookDto from 'src/user/dto/create-book.dto';
import { BooksService } from './books.service';

@Controller('book')
export default class BooksController {
  constructor(private readonly bookService: BooksService) {}
  @Post('post')
  postGenre( @Body() book: CreateBookDto) {
    return this.bookService.insert(book);
  }
  @Get()
  getAll() {
    return this.bookService.getAllBooks();
  }
}