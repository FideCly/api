import path from "path";
import "reflect-metadata";
import { DataSource } from "typeorm";

export const TestDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_TEST_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  migrationsRun: true,
  synchronize: true,
  logging: false,
  entities: [path.join(__dirname, "/entities/*.{ts,js}")],
  migrations: [path.join(__dirname, "/migrations/*.{ts,js}")],
  subscribers: [path.join(__dirname, "/subscribers/*.{ts,js}")],
});
