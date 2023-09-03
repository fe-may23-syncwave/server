import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
} from 'sequelize-typescript';
import { Category } from './category';
import { Capacity } from './capacity';
import { Colors } from './colors';

interface ProductAttributes {
  id: number;
  category_id: number;
  phoneId: string;
  itemId: string;
  name: string;
  fullPrice: number;
  discountPrice: number | null;
  screen: string;
  capacity_id: number;
  color_id: number;
  ram: string;
  year: number;
  image: string;
}

@Table({
  tableName: 'products',
  modelName: 'Product',
  timestamps: false,
})
export class Product
  extends Model<ProductAttributes>
  implements ProductAttributes
{
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
    id!: number;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
    category_id!: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    phoneId!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    itemId!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    name!: string;

  @AllowNull(false)
  @Column({
    type: DataType.FLOAT,
  })
    fullPrice!: number;

  @Column({
    type: DataType.FLOAT,
  })
    discountPrice!: number | null;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    screen!: string;

  @ForeignKey(() => Capacity)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
    capacity_id!: number;

  @ForeignKey(() => Colors)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
    color_id!: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    ram!: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
    year!: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    image!: string;
}
