import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/user.model';
import { TaskColumn } from './columns/column.model';
import { Card } from './cards/card.model';
import { UsersModule } from './users/users.module';
import { TaskColumnModule } from './columns/columns.module';
import { CardModule } from './cards/cards.module';
import { Commentary } from './commentary/commentary.model';
import { CommentaryModule } from './commentary/commentary.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'dsh',
      password: '123',
      database: 'trello',
      models: [User, TaskColumn, Card, Commentary],
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule, TaskColumnModule, CardModule, CommentaryModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
