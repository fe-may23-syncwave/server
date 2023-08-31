import { DataTypes } from 'sequelize';
import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'categories',
  modelName: 'Category',
  timestamps: false,
})
export class Category extends Model {
  @Column({
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
    id!: number;

  @Column({
    type: DataTypes.STRING,
    unique: true,
  })
    name!: string;
}
