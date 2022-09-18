modelName=$1
lowerModelName=$(echo $modelName | tr '[:upper:]' '[:lower:]')
upperModelName=$(echo $modelName | tr '[:lower:]' '[:upper:]')
tableName=${modelName}s
lowerTableName=$(echo $tableName | tr '[:upper:]' '[:lower:]')
upperTableName=$(echo $tableName | tr '[:lower:]' '[:upper:]')
shell_path=`pwd -P`

cat > $shell_path/src/modules/$lowerTableName/$lowerTableName.service.ts << EOF

import { $modelName } from '@/database/models/$lowerModelName.model';
import { Injectable, Inject } from '@nestjs/common';
import { ${modelName}Dto } from './$lowerModelName.dto';

@Injectable()
export class ${tableName}Service {
  constructor(
    @Inject('${upperTableName}_REPOSITORY')
    private ${lowerTableName}Repository: typeof $modelName,
  ) {}

  async create($lowerModelName: ${modelName}Dto): Promise<$modelName> {

  }
}
