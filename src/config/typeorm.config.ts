import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { User } from 'src/models/User';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenv.config({});

const config = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [User],
  migrations: ["../migrations/*.ts"],
  autoLoadEntities: true,
  synchronize: false,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);