import dotenv from "dotenv"
dotenv.config()

export default {
    database_ulr : process.env.DATA_URL,
    port : process.env.PORT
}