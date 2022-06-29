import {config} from 'dotenv'
config()
export const configuration = {
    HOST : process.env.HOST || 'localhost',
    PORT : process.env.PORT || 8080,
}

export const mongoConfig ={
    PASSWORD: process.env.MONGO_PASSWORD
}