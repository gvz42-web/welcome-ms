import {prisma} from "../index";
import {MessageContext} from "vk-io";

export default async function(context: MessageContext, next: Function): Promise<any> {
     const student = await prisma.students.findUnique({
        where: {
            peer_id: context.peerId
        }
    })
    if (student) {
        context.profile = student
        context.is_registrated = true
    } else {
        context.is_registrated = false
    }
    return next()
}