import { UserService } from './user.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    findAllUsers() {
        return this.userService.getAllUsers()
    }

    @Get(':id')
    findUserById(
        @Param('id') id: number
    ) {
        return this.userService.getUserByID(id)
    }
}
