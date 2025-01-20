import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity({ name: 'tasks' })
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  @IsNotEmpty()
  todo: string;

  @Column({ type: 'text' })
  @IsNotEmpty()
  description: string;

  @Column({ type: 'boolean' })
  @IsNotEmpty()
  status: boolean;
}
