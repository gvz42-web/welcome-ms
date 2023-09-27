import {IStepContext} from "@vk-io/scenes";
import {educationLevels, year, yesNo} from "../keyboards";
import {profileView, translateEducationLevel} from "../../../utils/vk.utils";
import {Prisma} from "@prisma/client";
import {createStudent} from "../../../controllers/student.controller";

export default [
    (context: IStepContext<any>) => {
        if (context.scene.step.firstTime || !context.text) {
            return context.send('Как тебя зовут? \n(Пожалуйста, напиши полностью свою фамилию, имя и отчество (при наличии))');
        }
        context.scene.state.user = {}
        context.scene.state.user.last_name = context.text.split(' ')[0];
        context.scene.state.user.first_name = context.text.split(' ')[1];
        context.scene.state.user.middle_name = context.text.split(' ')[2] ? context.text.split(' ')[2] : '';

        return context.scene.step.next();
    },
    (context: IStepContext<any>) => {
        if (context.scene.step.firstTime || !context.text) {
            return context.send('Теперь напиши свою дату рождения в формате дд.мм.гггг');
        }
        const date = context.text.split('.')
        context.scene.state.user.birth_date = new Date(Number(date[2]), Number(date[1]) - 1, Number(date[0]));
        return context.scene.step.next();
    },
    (context: IStepContext<any>) => {
        if (context.scene.step.firstTime || !context.text) {
            return context.send({
                message:'Ты учишься в БФУ?',
                keyboard: yesNo.inline()
            });
        }
        context.scene.state.user.is_bfu_student = context.text === 'Да' ? true : false;
        return context.scene.step.next();
    },
    (context: IStepContext<any>) => {
        if (context.scene.step.firstTime || !context.text) {
            if (context.scene.state.user.is_bfu_student) {
                return context.send({
                    message: 'Выбери уровень образования',
                    keyboard: educationLevels.inline()
                });
            } else {
                return context.scene.step.next();
            }
        }
        context.scene.state.user.education_level = context.text
        return context.scene.step.next();
    },
    (context: IStepContext<any>) => {
        if (context.scene.step.firstTime || !context.text) {
            if (context.scene.state.user.is_bfu_student) {
                return context.send({
                    message: 'Напиши название своего направления'
                });
            } else {
                return context.scene.step.next();
            }
        }
        context.scene.state.user.group_name = context.text
        return context.scene.step.next();
    },
    (context: IStepContext<any>) => {
        if (context.scene.step.firstTime || !context.text) {
            if (context.scene.state.user.is_bfu_student) {
                return context.send({
                    message: 'На каком ты сейчас курсе?',
                    keyboard: year.inline()
                });
            } else {
                return context.scene.step.next();
            }
        }
        context.scene.state.user.year = Number(context.text)
        return context.scene.step.next();
    },
    (context: IStepContext<any>) => {
        if (context.scene.step.firstTime || !context.text) {
            return context.send({
                message: 'Напиши свой контактный номер телефона'
            });
        }
        context.scene.state.user.phone_number = context.text
        return context.scene.step.next();
    },
    (context: IStepContext<any>) => {
        if (context.scene.step.firstTime || !context.text) {
            return context.send({
                message: profileView(context.scene.state.user) + '\n\nВсё верно?',
                keyboard: yesNo.inline()
            });
        }
        if (context.text === 'Нет') {
            context.send('Тогда давай заполним ещё раз')
        } else {
            context.send('Отлично! Теперь ты можешь записываться на наши экскурсии')
        }
        context.scene.state.okay = context.text === 'Да' ? true : false;
        return context.scene.step.next();
    },
    async (context: IStepContext<any>) => {
        if (context.scene.state.okay) {
            context.scene.state.user.peer_id = context.peerId
            console.log(context.scene.state.user)
            context.scene.state.user.education_level = translateEducationLevel(context.scene.state.user.education_level)
            const user: Prisma.studentsCreateInput = {
                ...context.scene.state.user,
                created_at: new Date(Date.now())
            }
            await createStudent(user)
            return context.scene.step.next();
        } else {
            await context.scene.leave()
            return context.scene.enter('registration')
        }
    }
]