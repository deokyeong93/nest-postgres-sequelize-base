shell_path=`pwd -P`
cat > $shell_path/src/database/migrations/$(date +"%Y%m%d%H%M%S")-$1.ts << EOF
import {
  QueryInterfaceType,
  SequelizeType,
} from '../../../types/sequelize-migration-cli';

module.exports = {
  up: async (
    queryInterface: QueryInterfaceType, //
    Sequelize: SequelizeType,
  ) => {
    // 마이그레이션 내용 작성
  },
  down: async (
    queryInterface: QueryInterfaceType, //
    Sequelize: SequelizeType,
  ) => {
    // 마이그레이션 실패시 내용 작성, 실패시 롤백 적용
  },
};
