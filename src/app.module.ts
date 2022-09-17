import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { UsersModule } from '@/modules/users/index';

const configModule = ConfigModule.forRoot({
  isGlobal: true,
});

@Module({
  imports: [configModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
