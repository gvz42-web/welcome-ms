import {prisma} from "../index";
import {Prisma} from "@prisma/client";

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
