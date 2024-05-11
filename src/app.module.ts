import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity'; 
import { Task } from './task/entities/task.entity'; 
import { TaskCategory } from './task-category/entities/task-category.entity'; 
import { TaskStatus } from './task-status/entities/task-status.entity'; 

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'apicul',
    entities: [User, Task, TaskCategory, TaskStatus],
    synchronize: true,
  }), UserModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
