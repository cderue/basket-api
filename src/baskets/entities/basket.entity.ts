import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';
import { IDefineOptions } from 'sequelize-typescript/lib/interfaces/IDefineOptions';
import { BasketItem } from '../dto/basket-item.dto';

const tableOptions: IDefineOptions = { timestamps: true } as IDefineOptions;
@Table(tableOptions)
export class Basket extends Model<Basket> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'ID',
  })
  id: number;

  @Column
  public buyerId: string;

  @Column({
      type: DataType.JSONB
  })
  public items: BasketItem[];
}