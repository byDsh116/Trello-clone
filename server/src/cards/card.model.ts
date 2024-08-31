import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { TaskColumn } from "src/columns/column.model";
import { Commentary } from "src/commentary/commentary.model";

@Table
export class Card extends Model<Card> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string

    @Column(DataType.TEXT)
    description: string;


    @ForeignKey(() => TaskColumn)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    columnId: number;

    @BelongsTo(() => TaskColumn)
    column: TaskColumn

    @HasMany(() => Commentary)
    comments: Commentary[]

}