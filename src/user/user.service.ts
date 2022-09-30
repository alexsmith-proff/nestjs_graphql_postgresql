import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './user.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
      @InjectRepository(UserEntity)
      private readonly userRepository: Repository<UserEntity>
      ) {}

  async createUser(createUserInput: CreateUserDto): Promise<UserEntity> {
    return await this.userRepository.save({...createUserInput})
  }  
  getAllUsers() {
    return this.userRepository.find({
      relations: {        
        posts: true
      }
    })
  }

  getUserByID(id: number) {
    return this.userRepository.findOne({
      where: {
        id
      },
      relations: {
        posts: true
      }
    })
  }

  async updateUser(updateUserInput: UpdateUserDto): Promise<UserEntity> {
    await this.userRepository.update({id: updateUserInput.id}, {...updateUserInput})
    return await this.getUserByID(updateUserInput.id)
  }

  deleteUser(id: number) {
    return this.userRepository.delete(id)
  }

}
