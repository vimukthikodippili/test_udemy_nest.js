import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepositry } from './task.repositry';

@Module({
  imports: [TypeOrmModule.forFeature([TaskRepositry])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
