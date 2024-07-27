import express from 'express' 
import swaggerUi from 'swagger-ui-express'
import db from './config/db'
import  router  from './router'
import swaggerSpec from './config/swagger'
import cors, { CorsOptions } from 'cors'
import morgan from 'morgan'

// Conectar a base de datos
export async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        // console.log( colors.blue( 'Conexión exitosa a la BD'))
    } catch (error) {
        // console.log(error)
        console.log('Hubo un error al conectar a la BD') 
    }
}
connectDB()

// Instancia de express
const server = express()

//permitir conecciones
const corsOptions : CorsOptions ={
    origin:function(origen , callback){
       
        if(origen ===  process.env.FRONTED_URL){
            callback(null,true)
        }else{
            callback(new Error('Error de CORS'))
        }
    }
}

server.use(cors(corsOptions))

// Leer datos de formularios
server.use(express.json())

server.use(morgan('dev'))

server.use('/api/products', router)

//Docs
server.use('/docs',swaggerUi.serve, swaggerUi.setup(swaggerSpec) )

export default server