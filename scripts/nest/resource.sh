# 사용법
# modelName 변수에는 model 이름을 써주자
# 예) Book
# 첫 글자는 무조건 대문자로 써야 이상적으로 세팅이된다.

modelName=$1
tableName=${modelName}s
lowerTableName=$(echo $tableName | tr '[:upper:]' '[:lower:]')
shell_path=`pwd -P`

model_generate_path="$shell_path/scripts/sequelize/model-generate.sh"
controller_path="$shell_path/scripts/nest/controller.sh"
providers_path="$shell_path/scripts/nest/providers.sh"
service_path="$shell_path/scripts/nest/service.sh"
dto_path="$shell_path/scripts/nest/dto.sh"
module_path="$shell_path/scripts/nest/module.sh"

mkdir "$shell_path/src/modules/$lowerTableName"
mkdir "$shell_path/src/database/models"

echo `
  sh $model_generate_path $modelName;
  sh $controller_path $modelName;
  sh $providers_path $modelName;
  sh $service_path $modelName;
  sh $dto_path $modelName;
  sh $module_path $modelName;
  yarn prettier --write "${shell_path}/src/modules/${lowerTableName}/**/*.ts";
`

