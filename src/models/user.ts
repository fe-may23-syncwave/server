import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
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
  activationToken: string | null;
  isActivated?: boolean;
}

export interface UsersCreationAttributes
  extends Optional<UsersAttributes, 'id'> {}

@Table({
  tableName: 'users',
  modelName: 'User',
  timestamps: true,
})
export class User extends Model<UsersAttributes, UsersCreationAttributes> {
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

  @Length({ min: 6 })
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

  @AllowNull(false)
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isActivated!: boolean;

  @HasMany(() => Order)
  orders!: Order[];
}
