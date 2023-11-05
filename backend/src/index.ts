import {vk} from "./services/vk";
import { PrismaClient } from "@prisma/client";
import express, {NextFunction} from "express";
import bodyParser from "body-parser";
import {studentsRouter} from "./routes/students.route";
import cors from 'cors'
import {eventsRouter} from "./routes/events.route";

// Add a list of allowed origins.
// If you have more origins you would like to add, you can add them to the array below.
const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
    origin: allowedOrigins
};


export const prisma = new PrismaClient()
const app = express()
const port = 4001

async function main(){
    app.use(cors(options))
    app.use(bodyParser.json());
    app.use(
        bodyParser.urlencoded({
            extended: true,
        })
    );

    app.get('/', (req, res) => {
        res.json({'message': 'ok'});
    })

    app.use('/students', studentsRouter)
    app.use('/events', eventsRouter)


    /* Error handler middleware */
    // app.use((err, req, res, next)=> {
    //     const statusCode = err.statusCode || 500;
    //     console.error(err.message, err.stack);
    //     res.status(statusCode).json({'message': err.message});
    //
    //     return;
    // });

    app.listen(port, '0.0.0.0', () => {
        console.log(`Example app listening at http://localhost:${port}`)
    });
    vk.updates.start().catch(console.error);
}

main()
    .then(async () => {
        await prisma.$connect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });