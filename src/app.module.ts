import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { UsersModule } from '@/modules/users/index';
import { PostsModule } from './modules/posts';

const configModule = ConfigModule.forRoot({
  isGlobal: true,
});

@Module({
  imports: [configModule, UsersModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
