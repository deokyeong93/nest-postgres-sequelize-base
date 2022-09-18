filename=$1
lowerFilename=$(echo $filename | tr '[:upper:]' '[:lower:]')
shell_path=`pwd -P`

cat > $shell_path/src/database/models/$lowerFilename.model.ts << EOF

import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class $1 extends Model {
  @Column
  name: string;

  @Column
  age: number;

  @Column
  breed: string;
}