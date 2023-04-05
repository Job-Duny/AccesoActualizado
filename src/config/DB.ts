import { createPool } from "mysql2/promise"
import {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_PORT,
} from "@/config/ROUTES"

const pool = createPool({

    user: DB_USER || "root",
    host: DB_HOST || "localhost",
    password: DB_PASSWORD || "n0m3l0",
    database: DB_NAME || "student-access",
    port: parseInt(DB_PORT?.toString() || "3306"),

    // host: "localhost",
    // user: "root",
    // password: "n0m3l0",
    // port: 3306,
    // database: "student-access",
})

export { pool };