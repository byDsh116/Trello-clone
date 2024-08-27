import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { TaskColumn } from 'src/columns/column.model';

@Table
export class User extends Model<User> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;
    @HasMany(() => TaskColumn)
    columns: TaskColumn[];
}