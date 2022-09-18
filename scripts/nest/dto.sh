modelName=$1
lowerModelName=$(echo $modelName | tr '[:upper:]' '[:lower:]')
upperModelName=$(echo $modelName | tr '[:lower:]' '[:upper:]')
tableName=${modelName}s
lowerTableName=$(echo $tableName | tr '[:upper:]' '[:lower:]')
shell_path=`pwd -P`

cat > $shell_path/src/modules/$lowerTableName/$lowerModelName.dto.ts << EOF

export class ${modelName}Dto {
  name: string;

  email: string;

  role: string;
}

