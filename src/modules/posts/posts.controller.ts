import { Get } from '@nestjs/common';
import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { UsersService } from '../users/users.service';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  async createPost(@Req() req: Request, @Res() res: Response) {
    const { userUuid, body } = req.body;

    const user = await this.usersService.readOne(userUuid);

    const result = await this.postsService.create({ body, userId: user.id });

    return res.json(result);
  }

  @Get('')
  async readAllPosts(@Req() req: Request, @Res() res: Response) {
    const result = await this.postsService.readAll();

    return res.json(result);
  }
}
