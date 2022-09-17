import { Post } from '@/database/models/post.model';
import { User } from '@/database/models/user.model';
import { Injectable, Inject } from '@nestjs/common';
import { PostDto } from './post.dto';

@Injectable()
export class PostsService {
  constructor(
    @Inject('POSTS_REPOSITORY')
    private postsRepository: typeof Post,
  ) {}

  async create(post: PostDto): Promise<Post> {
    const { body, userId } = post;
    const result = await this.postsRepository.create({ body, userId });

    return result;
  }

  async readAll(): Promise<Post[]> {
    const result = await this.postsRepository.findAll({ include: [User] });

    return result;
  }
}
