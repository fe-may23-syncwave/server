import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
} from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { User } from './user';

interface TokenAttributes {
  id: number;
  refreshToken: string;
  userId: number;
}

export interface TokenCreationAttributes
  extends Optional<TokenAttributes, 'id'> {}

@Table({
  tableName: 'tokens',
  modelName: 'Token',
  timestamps: false,
})
export class Token extends Model<TokenAttributes, TokenCreationAttributes> {
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
    id!: number;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
    userId!: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    refreshToken!: string;
}
