import {
  Column,
  Model,
  AllowNull,
  Table,
  PrimaryKey,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';
import { Category } from './category';
import { Capacity } from './capacity';
import { Colors } from './colors';
import { Accessories } from './accessories';
import { Phone } from './phones';
import { Tablet } from './tablets';

interface ProductAttributes {
  id: number;
  category_id: number;
  productId: string;
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
  @PrimaryKey
  @AllowNull(false)
  @Column
    id!: number;

  @ForeignKey(() => Category)
  @Column({
    field: 'category_id',
  })
    category_id!: number;

  @Column
    productId!: string;

  @ForeignKey(() => Phone)
  @ForeignKey(() => Tablet)
  @ForeignKey(() => Accessories)
  @Column({
    field: 'itemId',
  })
    itemId!: string;

  @AllowNull(false)
  @Column
    name!: string;

  @AllowNull(false)
  @Column
    fullPrice!: number;

  @Column({
    type: DataType.NUMBER,
  })
    discountPrice!: number | null;

  @Column
    screen!: string;

  @ForeignKey(() => Capacity)
  @Column({
    field: 'capacity_id',
  })
    capacity_id!: number;

  @ForeignKey(() => Colors)
  @Column({
    field: 'color_id',
  })
    color_id!: number;

  @Column
    ram!: string;

  @Column
    year!: number;

  @AllowNull(false)
  @Column
    image!: string;
}
