import { Sequelize } from 'sequelize-typescript';

import * as config from '@/database/config/config.js';
import { User } from '@/database/models/user.model';
import { Post } from './models/post.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      let postgresConfig;
      switch (process.env.NODE_ENV) {
        case 'development':
          postgresConfig = config.development;
        case 'production':
          postgresConfig = config.production;
        default:
          postgresConfig = config.development;
      }
      const sequelize = new Sequelize(postgresConfig);
      sequelize.addModels([User, Post]);
      await sequelize.authenticate();
      console.log('🔌 DB 연결 완료');
      return sequelize;
    },
  },
];
