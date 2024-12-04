import { Injectable } from '@nestjs/common';
import { Task, TaskStats } from './task.model';
import { v1 as uuidv1 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private task: Task[] = [];

  getAllTasks(): Task[] {
    return this.task;
  }
  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuidv1(),
      title,
      description,
      status: TaskStats.Open,
    };
    this.task.push(task);
    return task;
  }
  getTaskById(id: string): Task {
    return this.task.find((task) => task.id === id);
  }
  deleteTask(id: string): void {
    this.task = this.task.filter((task) => task.id !== id);
  }
  updateTask(id: string, status: TaskStats): Task {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}
