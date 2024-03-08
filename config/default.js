import dotenv from "dotenv";
dotenv.config();

export const env = {
    port : process.env.PORT || 3000,
    postgres: process.env.DB_URL_PG
}