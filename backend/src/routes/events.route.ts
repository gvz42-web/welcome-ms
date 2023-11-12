import express from "express";
import {getAllEvents, getEventFull} from "../controllers/events.controller";

export const eventsRouter = express.Router();

eventsRouter.get('/', async (req, res, next) => {
    res.json(await getAllEvents())
    next()
})

eventsRouter.get('/:id',async (req, res, next) => {
    res.json(await getEventFull(req.params.id))
    next()
})