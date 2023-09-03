import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
  Scopes,
  IsEmail,
  Length,
  HasMany,
} from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { Order } from './order';

interface UsersAttributes {
  id: number;
  email: string;
  password: string;
  activationToken: string;
}

export interface UsersCreationAttributes
  extends Optional<UsersAttributes, 'id'> {}

@Scopes(() => ({
  defaultScope: {
    attributes: { exclude: ['password'] },
  },
}))
@Table({
  tableName: 'users',
  modelName: 'User',
  timestamps: false,
})
export class User extends Model<
  UsersAttributes,
  UsersCreationAttributes
  > {
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
    id!: number;

  @IsEmail
  @AllowNull(false)
  @Column({
    type: DataType.STRING(100),
    unique: true,
  })
    email!: string;

  @Length({ min: 8 })
  @AllowNull(false)
  @Column({
    type: DataType.STRING(100),
  })
    password!: string;

  @AllowNull(true)
  @Column({
    type: DataType.STRING(100),
    unique: true,
  })
    activationToken!: string;

  @HasMany(() => Order)
    orders!: Order[];


}

