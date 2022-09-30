import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDto } from './dto/create-user.dto';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((type) => [UserEntity])
  async getUsers(): Promise<UserEntity[]> {
    return await this.userService.getAllUsers();
  }

  @Query((type) => UserEntity)
  async getUserById(@Args('id') id: number): Promise<UserEntity> {
    return await this.userService.getUserByID(id)
  }

  @Mutation((type) => UserEntity)
  async createUser(@Args('inputData') createUserInput: CreateUserDto): Promise<UserEntity> {
    return await this.userService.createUser(createUserInput)
  }

  @Mutation((type) => UserEntity)
  async updateUser(@Args('inputData') updateUserDto: UpdateUserDto): Promise<UserEntity>{
    return await this.userService.updateUser(updateUserDto)
  }

 @Mutation(type => String)
 async deletUser(@Args('id') id: number): Promise<number> {
  await this.userService.deleteUser(id)
   return id
 }
}
