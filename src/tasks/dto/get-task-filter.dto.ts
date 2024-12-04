import { TaskStats } from '../task.model';

export class GetTaskFilterDto {
  status: TaskStats;
  search: string;
}
