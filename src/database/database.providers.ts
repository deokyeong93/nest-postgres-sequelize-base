import { Sequelize } from 'sequelize-typescript';

import * as config from '@/database/config/config.js';

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
      sequelize.addModels([]);
      // 해당 옵션은 수동 마이그레이션으로 작업할 것을 권장하기에 주석처리
      // 일단 docs에 써 있어서 추가
      // await sequelize.sync();
      return sequelize;
    },
  },
];
