import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  NotNull,
} from 'sequelize-typescript';
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
    validate: {
      notNull: { msg: '유저는 이름을 반드시 가져야합니다.' },
      notEmpty: { msg: '이름은 빈 값이 될 수 없습니다.' },
    },
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: '유저는 이메일을 반드시 가져야합니다.' },
      notEmpty: { msg: '이메일은 빈 값이 될 수 없습니다.' },
      isEmail: { msg: '올바른 이메일 유형을 따르세요' },
    },
  })
  email: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: '유저는 역할을 반드시 가져야합니다.' },
      notEmpty: { msg: '역할은 빈 값이 될 수 없습니다.' },
    },
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
