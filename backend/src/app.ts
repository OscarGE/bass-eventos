/*Configuraciones del servidor*/ 

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import config from './config';

import mobiliarioRoutes from "./routes/mobiliario.routes";

const app = express()

app.set('port', config.PORT)
app.use(morgan('dev')) //Muestra peticiones por consola
app.use(cors()); //Permite solicitudes a múltiples servidores
app.use(express.json()) //Permite la lectura de objetos json
app.use(express.urlencoded({extended:false})) //Permite la lectura de los campos con solicitudes POST

app.use(mobiliarioRoutes)

export default app;
