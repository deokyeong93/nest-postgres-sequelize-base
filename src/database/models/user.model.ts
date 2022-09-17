import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Post } from './post.model';

@Table({
  tableName: 'users',
})
export class User extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  uuid: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  role: string;

  @HasMany(() => Post)
  posts: Post[];

  toJSON() {
    return {
      ...this.get(),
      id: undefined,
    };
  }
}
