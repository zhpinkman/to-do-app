import { Injectable } from '@nestjs/common';
import UserEntity from 'src/db/entity/user.entity';
import CreateUserDto from './dto/create-user.dto';

@Injectable()
export class UserServices {


  async findOne(username: string): Promise<UserEntity | undefined> {
    console.log("user service")
    console.log(username);    
    
    return UserEntity.findOne({
      where: {name: username}
    })
  }

  async insert(userDetails: CreateUserDto): Promise<UserEntity> {
    const userEntity: UserEntity = UserEntity.create();
    const {name} = userDetails;
    userEntity.name = name;
    userEntity.password = userDetails.password;
    await UserEntity.save(userEntity);
    return userEntity;
  }
  async getAllUsers(): Promise<UserEntity[]> {
    return await UserEntity.find();
  }
  // async getBooksOfUser(userID: number): Promise<BookEntity[]> {
  //   console.log(typeof(userID));
  //   const user: UserEntity = await UserEntity.findOne({where: {id: userID}, relations: ['books']});
  //   return user.books;
  // }
}      