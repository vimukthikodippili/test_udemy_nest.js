export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStats;
}
export enum TaskStats {
  Open = 'Open',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
