modelName=$1
lowerModelName=$(echo $modelName | tr '[:upper:]' '[:lower:]')
upperModelName=$(echo $modelName | tr '[:lower:]' '[:upper:]')
tableName=${modelName}s
lowerTableName=$(echo $tableName | tr '[:upper:]' '[:lower:]')
upperTableName=$(echo $tableName | tr '[:lower:]' '[:upper:]')
shell_path=`pwd -P`

cat > $shell_path/src/modules/$lowerTableName/$lowerTableName.providers.ts << EOF

import { $modelName } from '@/database/models/$lowerModelName.model';

export const ${lowerTableName}Providers = [
  {
    provide: '${upperTableName}_REPOSITORY',
    useValue: $modelName,
  },
];

