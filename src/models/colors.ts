import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Optional } from 'sequelize';

interface ColorsAttributes {
  id: number;
  name: string;
}

export interface ColorsCreationAttributes
  extends Optional<ColorsAttributes, 'id'> {}

@Table({
  tableName: 'colors',
  modelName: 'Colors',
  timestamps: false,
})
export class Colors extends Model<ColorsAttributes, ColorsCreationAttributes> {
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
