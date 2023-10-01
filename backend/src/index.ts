import {vk} from "./services/vk";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient()

async function main(){
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