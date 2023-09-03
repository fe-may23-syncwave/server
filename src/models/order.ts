import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { User } from './user';

interface OrderAttributes {
  id: number;
  userId: number;
  totalPrice: number;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderCreationAttributes
  extends Optional<OrderAttributes, 'id'> {}

@Table({
  tableName: 'orders',
  modelName: 'Order',
  timestamps: true,
})
export class Order extends Model<OrderAttributes, OrderCreationAttributes> {
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
    id!: number;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
    userId!: number;

  @BelongsTo(() => User)
    user!: User;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
    totalPrice!: number;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
    quantity!: number;
}
