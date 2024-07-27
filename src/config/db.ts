import { Sequelize } from 'sequelize-typescript'
import dotenv from 'dotenv'
dotenv.config()

const db = new Sequelize(process.env.DATABESE_URL!, {
    models: [__dirname + '/../models/**/*'],
    logging: false
})

export default db