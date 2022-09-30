import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from './post.entity';
import { PostDto } from './post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async createPost(post: PostDto) {
    const newPost = {
      ...post,
      user: post.user
        ? {
            id: post.user.id,
          }
        : null,
    };

    return await this.postRepository.save(newPost);
  }

  async findAllPost() {
    return await this.postRepository.find();
  }
  async findById(id: number) {
    return await this.postRepository.findOne({
      where: {
        id,
      },
      // Вернет только 'name' и 'desciption'
      // select: {
      //     name: true,
      //     description: true
      // }

      // Добавит связь с 'user'
      relations: {
        user: true,
      },
    });
  }
  async deletePost(id: number) {
    return await this.postRepository.delete(id);
  }
}
