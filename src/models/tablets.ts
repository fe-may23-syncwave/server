import {
  AllowNull,
  Column,
  DataType,
  Model,
  Table,
  BelongsTo,
} from 'sequelize-typescript';
import { Product } from './products';

interface TabletAttributes {
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string;
  capacity: string;
  fullPrice: number;
  discountPrice: number;
  colorsAvailable: string;
  color: string;
  images: string;
  description: Record<string, string>;
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string | null;
  zoom: string;
  cell: string;
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
  @AllowNull(false)
  @Column({
    type: DataType.STRING,
    primaryKey: true,
    references: {
      model: 'products',
      key: 'itemId',
    },
  })
    id!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    namespaceId!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    name!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    capacityAvailable!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
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

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
    camera!: string | null;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    zoom!: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
    cell!: string;

  @BelongsTo(() => Product)
    product!: Product;
}
