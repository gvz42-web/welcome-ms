import express, {NextFunction} from "express";
import {getStudentFull, getStudents} from "../controllers/student.controller";

export const studentsRouter = express.Router();

studentsRouter.get('/', async (req, res, next) => {
    res.json(await getStudents())
    next()
})

studentsRouter.get('/:id',async (req, res, next) => {
    res.json(await getStudentFull(req.params.id))
    next()
})
