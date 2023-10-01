import {prisma} from "../index";
import {Prisma} from "@prisma/client";

export const createEvent = async (data:Prisma.eventsCreateInput) => {
    await prisma.events.create({
        data
    })
}

export const updateEvent = async (id: number,data:Prisma.eventsUpdateInput)=> {
    await prisma.events.update({
        where: {
            event_id: id
        },
        data
    })
}

export const applyToEvent = async (data:Prisma.students_eventsUncheckedCreateInput)=> {
    const applyments = await prisma.students_events.findMany({
        where: {
            student_id: data.student_id,
            event_id: data.event_id
        }
    })
    if (applyments.length === 0) {
        await prisma.students_events.create({
            data
        })
        return true
    } else {
        return false
    }
}

export const getOpenEvents = async () => {
    const events = await prisma.events.findMany()
    return events;
}