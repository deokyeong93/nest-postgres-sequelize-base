import { DatabaseModule } from '@/database/database.module';
import { Module } from '@nestjs/common';
import { usersProviders } from './users.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...usersProviders],
})
export class UsersModule {}
