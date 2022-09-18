import { Controller, Delete, Get, Post, Req, Res } from '@nestjs/common';
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

  @Get()
  async readAllUsers(@Req() req: Request, @Res() res: Response) {
    const result = await this.usersService.readAll();

    return res.json(result);
  }

  @Get(':uuid')
  async readUser(@Req() req: Request, @Res() res: Response) {
    const { uuid } = req.params;
    const result = await this.usersService.readOne(uuid);

    return res.json(result);
  }

  @Delete(':uuid')
  async deleteUser(@Req() req: Request, @Res() res: Response) {
    const { uuid } = req.params;
    const result = await this.usersService.delete(uuid);

    return res.json({ data: result, message: '유저 삭제' });
  }
}
