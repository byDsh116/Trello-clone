import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Card } from "src/cards/card.model";
import { User } from "src/users/user.model";


@Table
export class Commentary extends Model<Commentary> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    text: string

    @ForeignKey(() => Card)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    cardId: number

    @BelongsTo(() => Card)
    card: Card

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId: number

    @BelongsTo(() => User)
    user: User
}
