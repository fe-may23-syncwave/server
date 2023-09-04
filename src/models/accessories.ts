import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
  BelongsTo,
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
  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    references: {
      model: 'products',
      key: 'productId',
    },
  })
    id!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    name!: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
    fullPrice!: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    colorsAvailable!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    color!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    images!: string;

  @AllowNull(false)
  @Column({
    type: DataType.JSONB,
  })
    description!: Record<string, string>;

  @BelongsTo(() => Product)
    product!: Product;
}
