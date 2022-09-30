import { PostDto } from './post.dto';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor( private readonly postService: PostService) {}

    @Post()
    create(@Body() post: PostDto) {
        return this.postService.createPost(post)
    }

    @Get()
    findAllPost() {
        return this.postService.findAllPost()
    }

    @Get(':id')
    findPostById(@Param('id') id: number) {
        return this.postService.findById(id)
    }

    @Delete(':id')
    delatePost(@Param('id') id: number) {
        return this.delatePost(id)
    }

}
