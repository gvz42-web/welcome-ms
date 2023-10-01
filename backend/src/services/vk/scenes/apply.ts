import {IStepContext} from "@vk-io/scenes";
import {eventsKeyboard} from "../keyboards";
import {applyToEvent, getOpenEvents} from "../../../controllers/events.controller";


export default [
    async (context: IStepContext<any>) => {
        const events = await getOpenEvents()
        if (context.scene.step.firstTime || !context.text) {
            return context.send({
                message: "123",
                keyboard: eventsKeyboard(events).inline()
            });
        }
        const command = context.messagePayload.command

        const status = await applyToEvent({
            event_id: command,
            student_id: context.profile.student_id,
            registration_date: new Date(Date.now()),
            is_approved: false,
            is_visited: false
        })

        if (status) {
            context.send(`Вы успешно записались на ${context.text}`)
        } else {
            context.send('Вы уже записались на эту экскурсию')
        }

        return context.scene.leave().then(() => context.scene.enter('mainMenu'))
    },
]