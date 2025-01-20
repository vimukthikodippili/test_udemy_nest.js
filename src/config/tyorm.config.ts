import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1234',
  database: 'taskManagemnet',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
  ssl: false,
  logging: true,
  autoLoadEntities: true,
};
