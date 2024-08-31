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






// @Table
// export class Card extends Model<Card> {
//     @Column({
//         type: DataType.STRING,
//         allowNull: false,
//     })
//     title: string

//     @Column(DataType.TEXT)
//     description: string;

//     // что значит ForeignKey?
//     @ForeignKey(() => TaskColumn)
//     @Column({
//         type: DataType.INTEGER,
//         allowNull: false,
//     })
//     columnId: number;

//     @BelongsTo(() => TaskColumn)
//     column: TaskColumn

//     @HasMany(() => Commentary)
//     comments: Commentary[]

// }