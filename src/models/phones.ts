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

interface PhoneAttributes {
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
  camera: string | null;
  zoom: string;
  cell: string[];
}

@Table({
  tableName: 'phones',
  modelName: 'Phone',
  timestamps: false,
})
export class Phone extends Model<PhoneAttributes> implements PhoneAttributes {
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
  @Column
    discountPrice!: number;

  @AllowNull(false)
  @Column({
    type: DataType.JSONB,
  })
    colorsAvailable!: string[];

  @AllowNull(false)
  @Column
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
  @Column
    screen!: string;

  @AllowNull(false)
  @Column
    resolution!: string;

  @AllowNull(false)
  @Column
    processor!: string;

  @AllowNull(false)
  @Column
    ram!: string;

  @Column
    camera!: string;

  @AllowNull(false)
  @Column
    zoom!: string;

  @AllowNull(false)
  @Column({
    type: DataType.JSONB,
  })
    cell!: string[];

  @BelongsTo(() => Product)
    product!: Product;
}
