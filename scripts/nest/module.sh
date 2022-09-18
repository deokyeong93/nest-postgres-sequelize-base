modelName=$1
lowerModelName=$(echo $modelName | tr '[:upper:]' '[:lower:]')
upperModelName=$(echo $modelName | tr '[:lower:]' '[:upper:]')
tableName=${modelName}s
lowerTableName=$(echo $tableName | tr '[:upper:]' '[:lower:]')
upperTableName=$(echo $tableName | tr '[:lower:]' '[:upper:]')
shell_path=`pwd -P`

cat > $shell_path/src/modules/${lowerTableName}/index.ts << EOF

import { DatabaseModule } from '@/database/database.module';
import { Module } from '@nestjs/common';
import { ${tableName}Controller } from './$lowerTableName.controller';
import { ${lowerTableName}Providers } from './$lowerTableName.providers';
import { ${tableName}Service } from './$lowerTableName.service';

@Module({
  imports: [DatabaseModule],
  exports: [${tableName}Service ],
  providers: [${tableName}Service , ...${lowerTableName}Providers ],
  controllers: [ ${tableName}Controller ],
})
export class ${tableName}Module {}
