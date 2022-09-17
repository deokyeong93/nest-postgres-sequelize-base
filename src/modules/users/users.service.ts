import { User } from '@/database/models/user.model';
import { Injectable, Inject } from '@nestjs/common';
import { UserDto } from './user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User,
  ) {}

  async create(user: UserDto): Promise<User> {
    const { name, email, role } = user;
    const result = await this.usersRepository.create({ name, email, role });

    return result;
  }

  async readAll() {
    const result = await this.usersRepository.findAll();

    return result;
  }

  async readOne(uuid: string) {
    const result = await this.usersRepository.findOne({
      where: { uuid },
    });

    return result;
  }
}
