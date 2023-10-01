import {IStepContext} from "@vk-io/scenes";
import {mainMenu, profileActions} from "../keyboards";
import {profileView} from "../../../utils/vk.utils";

export default [
    (context: IStepContext<any>) => {
        if (context.scene.step.firstTime || !context.text) {
            return context.send({
                message: profileView(context.profile),
                keyboard: profileActions.oneTime()
            })
        }
        const command = context.messagePayload.command

        if (command === 'Перезаполнить анкету') {
            return context.scene.leave().then(() => context.scene.enter('registration'))
        }
        if (command === 'Вернуться в главное меню') {
            return context.scene.leave().then(() => context.scene.enter('mainMenu'))
        }
        return context.scene.step.next();
    },
]