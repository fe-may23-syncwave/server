import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Optional } from 'sequelize';

interface CapacityAttributes {
  id: number;
  name: string;
}

export interface CapacityCreationAttributes
  extends Optional<CapacityAttributes, 'id'> {}

@Table({
  tableName: 'capacities',
  modelName: 'Capacity',
  timestamps: false,
})
export class Capacity extends Model<
  CapacityAttributes,
  CapacityCreationAttributes
> {
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
    id!: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    unique: true,
  })
    name!: string;
}
