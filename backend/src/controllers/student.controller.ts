import {prisma} from "../index";
import {Prisma} from "@prisma/client";

export const getStudents = async () => {
  const students = await prisma.students.findMany()
  return students
}

export const getStudentFull = async (id: string) => {
  const student = await prisma.students.findUnique({
    where: {
      student_id: Number(id)
    }
  })
  const eventsApply = await prisma.students_events.findMany({
    where: {
      student_id: Number(id)
    }
  })
  const events = await prisma.events.findMany({
    where: {
      OR: [
          ...eventsApply.map(e => ({event_id: e.event_id}))
      ]
    }
  })
  return {
    ...student,
    events
  }
}

export const createStudent = async (data:Prisma.studentsCreateInput) => {
  await prisma.students.create({
    data
  })
}

export const updateStudent = async (data:Prisma.studentsCreateInput)=> {
  await prisma.students.update({
    where: {
      peer_id: data.peer_id
    },
    data
  })
}
