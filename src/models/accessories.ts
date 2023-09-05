import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
  BelongsTo,
  PrimaryKey,
  ForeignKey,
} from 'sequelize-typescript';
import { Product } from './products';

interface AccessoriesAttributes {
  id: string;
  name: string;
  fullPrice: number;
  colorsAvailable: string;
  color: string;
  images: string;
  description: Record<string, string>;
}

@Table({
  tableName: 'accessories',
  modelName: 'Accessories',
  timestamps: false,
})
export class Accessories
  extends Model<AccessoriesAttributes>
  implements AccessoriesAttributes
{
  @ForeignKey(() => Product)
  @PrimaryKey
  @AllowNull(false)
  @Column
    id!: string;

  @AllowNull(false)
  @Column
    name!: string;

  @AllowNull(false)
  @Column
    fullPrice!: number;

  @AllowNull(false)
  @Column
    colorsAvailable!: string;

  @AllowNull(false)
  @Column
    color!: string;

  @AllowNull(false)
  @Column
    images!: string;

  @AllowNull(false)
  @Column({
    type: DataType.JSONB,
  })
    description!: Record<string, string>;

  @BelongsTo(() => Product)
    product!: Product;
}
