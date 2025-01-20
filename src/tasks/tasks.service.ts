import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStats } from './task.model';
import { v1 as uuidv1 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepositry } from './task.repositry';
import { promises } from 'dns';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepositry)
    private tastRepositry: TaskRepositry,
  ) {}
  async getTaskById(id: string): Promise<promises<Task>> {
    const found = await this.tastRepositry.getId(id);
    if (!found) {
      throw new NotFoundException('not found');
    }
    return found;
  }
}
