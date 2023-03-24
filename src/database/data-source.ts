import "reflect-metadata"
import { DataSource } from "typeorm"
import User from "../app/entities/User"
import { CreateUsersTable1679658833813 } from './migrations/1679658833813-CreateUsersTable'

export const AppDataSource = new DataSource({
    type: "postgres",
    url: "postgres://lkkpzjft:45IXCsaKnP9sl79NYq9pDxSPUjfHkFHs@tuffi.db.elephantsql.com/lkkpzjft",
    // host: "localhost",
    // port: 5432,
    // username: "postgres",
    // password: "admin",
    // database: "formulariokiss",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [CreateUsersTable1679658833813],
    subscribers: [],
})
