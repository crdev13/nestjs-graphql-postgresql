import { Table, Model, Column } from 'sequelize-typescript';
import { IDefineOptions } from 'sequelize-typescript/lib/interfaces/IDefineOptions';

const tableOptions: IDefineOptions = {
  tableName: 'cats',
} as IDefineOptions;

@Table(tableOptions)
export class Cat extends Model<Cat> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  name: string;

  @Column
  age: number;

  @Column
  breed: string;
}
