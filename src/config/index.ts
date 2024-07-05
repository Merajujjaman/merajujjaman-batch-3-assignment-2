import dotenv from "dotenv"
dotenv.config()

export default {
    db_ulr : process.env.DB_URL,
    port : process.env.PORT
}