import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Req() req: Request, @Res() res: Response) {
    const result = await this.usersService.create(req.body);

    return res.json(result);
  }
}
