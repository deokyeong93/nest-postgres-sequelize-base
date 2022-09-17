import { DatabaseModule } from '@/database/database.module';
import { Module } from '@nestjs/common';
import { usersProviders } from '../users/users.providers';
import { UsersService } from '../users/users.service';
import { PostsController } from './posts.controller';
import { postsProviders } from './posts.providers';
import { PostsService } from './posts.service';

@Module({
  imports: [DatabaseModule],
  providers: [PostsService, UsersService, ...postsProviders, ...usersProviders],
  controllers: [PostsController],
})
export class PostsModule {}
