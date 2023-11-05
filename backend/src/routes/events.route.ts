import express, {NextFunction} from "express";
import {getAllEvents} from "../controllers/events.controller";

export const eventsRouter = express.Router();

eventsRouter.get('/', async (req, res, next) => {
    res.json(await getAllEvents())
    next()
})
