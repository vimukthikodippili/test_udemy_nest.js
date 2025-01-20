import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { typeOrmConfig } from './config/tyorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TasksModule, TypeOrmModule.forRoot(typeOrmConfig)],
})
export class AppModule {}
