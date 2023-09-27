import {prisma} from "../index";
import {Prisma} from "@prisma/client";

export const createStudent = async (data:Prisma.studentsCreateInput) => {
  console.log(data)
  await prisma.students.create({
    data
  })
}
