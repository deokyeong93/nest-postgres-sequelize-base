modelName=$1
lowerModelName=$(echo $modelName | tr '[:upper:]' '[:lower:]')
upperModelName=$(echo $modelName | tr '[:lower:]' '[:upper:]')
tableName=${modelName}s
lowerTableName=$(echo $tableName | tr '[:upper:]' '[:lower:]')
upperTableName=$(echo $tableName | tr '[:lower:]' '[:upper:]')
shell_path=`pwd -P`

serviceClassModule="${tableName}Service"
controllerClassModule="${tableName}Controller"

cat > $shell_path/src/modules/$lowerTableName/$lowerTableName.controller.ts << EOF

import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { $serviceClassModule } from './$lowerTableName.service';

@Controller('$lowerTableName')
export class $controllerClassModule {
  constructor(private readonly ${lowerTableName}Service: $serviceClassModule) {}

  @Get()
  async getHello(@Req() req: Request, @Res() res: Response) {
    const result = 'hello'

    return res.json(result);
  }
}
