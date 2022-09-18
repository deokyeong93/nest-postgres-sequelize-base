import { Post } from '@/database/models/post.model';
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

  async delete(uuid: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { uuid } });

    await user.destroy();

    return user;
  }

  async readAll() {
    const result = await this.usersRepository.findAll();

    return result;
  }

  async readOne(uuid: string) {
    const result = await this.usersRepository.findOne({
      where: { uuid },
      include: [Post],
    });

    return result;
  }

  async update(user: { uuid: string } & UserDto) {
    const result = await this.usersRepository.findOne({
      where: { uuid: user.uuid },
    });

    result.name = user.name;
    result.email = user.email;
    result.role = user.role;

    await result.save();

    return result;
  }
}
