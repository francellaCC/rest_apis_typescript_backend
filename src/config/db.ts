import { Sequelize } from 'sequelize-typescript'
import dotenv from 'dotenv'
dotenv.config()

const db = new Sequelize('postgresql://rest_api_node_ts_nix2_user:CMOV4lkC5Q9LriFKaeKb6JL1Ibld9ZBI@dpg-cqcn6c88fa8c73ctoqr0-a.oregon-postgres.render.com/rest_api_node_ts_nix2?ssl=true', {
    models: [__dirname + '/../models/**/*'],
    logging: false
})

export default db