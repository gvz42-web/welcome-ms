import {IStepContext} from "@vk-io/scenes";
import {mainMenu, mainMenuUnregistered} from "../keyboards";
import {createEvent} from "../../../controllers/events.controller";
import {Prisma} from "@prisma/client";

const menuText = (name:string):string => `Привет, ${name}!

Добро подаловать в нашу систему записи на экскурсии!
ну вот команды есть, понял да`

export default [
    async (context: IStepContext<any>) => {
        if (context.scene.step.firstTime || !context.text) {

            return context.send({
                message: context.is_registrated ? menuText(context.profile.first_name) : 'Привет! Чтобы записываться на экскурсии нужно создать анкету',
                keyboard: context.is_registrated ? mainMenu.oneTime() : mainMenuUnregistered.oneTime()
            });
        }
        const command = context.messagePayload.command
        if (command === 'Записаться на экскурсию') {
            return context.scene.leave().then(() => context.scene.enter('apply'))
        }
        if (command === 'Посмотреть анкету') {
            return context.scene.leave().then(() => context.scene.enter('profile'))
        }
        if (command === 'Создать анкету') {
            return context.scene.leave().then(() => context.scene.enter('registration'))
        }
        if (command === 'Выход') {
            return context.scene.leave().then(() => context.send('Чтобы вернуться напишите "Запись"'))
        }
        return context.scene.step.next();
    },
]