import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/user.model';
import { TaskColumn } from './columns/column.model';
import { Card } from './cards/card.model';
import { Commentary } from './comments/commentary.model';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
