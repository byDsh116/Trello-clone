import {
    Table,
    Model,
    Column,
    DataType,
    ForeignKey,
    BelongsTo,
    HasMany,
} from 'sequelize-typescript';
import { Card } from 'src/cards/card.model';
import { User } from 'src/users/user.model';

@Table
export class TaskColumn extends Model<TaskColumn> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId: number

    @BelongsTo(() => User)
    user: User

    @HasMany(() => Card)
    cards: Card[]
}
