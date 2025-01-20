import { Task } from './task.entity';
import { Repository, EntityRepository } from 'typeorm';
@EntityRepository(Task)
export class TaskRepositry extends Repository<Task> {


}
