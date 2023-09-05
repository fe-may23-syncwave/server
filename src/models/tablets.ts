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

interface TabletAttributes {
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  fullPrice: number;
  discountPrice: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: Record<string, string>;
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
}

@Table({
  tableName: 'tablets',
  modelName: 'Tablet',
  timestamps: false,
})
export class Tablet
  extends Model<TabletAttributes>
  implements TabletAttributes
{
  @ForeignKey(() => Product)
  @PrimaryKey
  @AllowNull(false)
  @Column({
    field: 'itemId',
  })
    id!: string;

  @AllowNull(false)
  @Column
    namespaceId!: string;

  @AllowNull(false)
  @Column
    name!: string;

    @AllowNull(false)
    @Column({
      type: DataType.JSONB,
    })
      capacityAvailable!: string[];


  @AllowNull(false)
  @Column
    capacity!: string;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
    fullPrice!: number;

  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
    discountPrice!: number;

  @AllowNull(false)
  @Column({
    type: DataType.JSONB,
  })
    colorsAvailable!: string[];

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    color!: string;

  @AllowNull(false)
  @Column({
    type: DataType.JSONB,
  })
    images!: string[];

  @AllowNull(false)
  @Column({
    type: DataType.JSONB,
  })
    description!: Record<string, string>;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    screen!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    resolution!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    processor!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    ram!: string;

  @BelongsTo(() => Product)
    product!: Product;
}
