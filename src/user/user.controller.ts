import { Body, Controller, Get, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger/dist';
import { ApiResponse } from '@nestjs/swagger/dist/decorators/api-response.decorator';
import { Public } from 'src/auth/constants';
import CreateUserDto from './dto/create-user.dto';
import { UserServices } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly usersServices: UserServices) {}

//'postUser()' will handle the creating of new User
  @ApiResponse({
    status: 201, 
    description: 'returns the created user'
  })
  @Public()
  @Post('post')
  postUser( @Body() user: CreateUserDto) {
    return this.usersServices.insert(user);
  }
// 'getAll()' returns the list of all the existing users in the database
  @ApiResponse({
    status: 200, 
    description: 'returns all the books'
  })
  @Get()
  getAll() {
    return this.usersServices.getAllUsers();
  }

//'getBooks()' return all the books which are associated with the user 
// provided through 'userID' by the request  
  @ApiResponse({
    status: 200, 
    description: 'getBooks() return all the books which are associated with the user \
      provided through \'userID\' by the request', 
  })
  @ApiBody({
    description: 'user id associated with wanted books', 
    schema: {
      type: 'object', 
      properties: {
        "userID" : {
          type: 'string'
        }
      }
    }
  })
  @Get('books')
  getBooks( @Body('userID', ParseIntPipe) userID: number ) {
    return this.usersServices.getBooksOfUser(userID);
  }
}