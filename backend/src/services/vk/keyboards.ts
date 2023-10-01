import {KeyboardBuilder} from "vk-io";
import {Prisma} from "@prisma/client";
import {dateToFormatString} from "../../utils/vk.utils";

const { Keyboard } = require("vk-io")

export const yesNo:KeyboardBuilder = Keyboard.keyboard([
  Keyboard.textButton({
    label: 'Да',
    payload: {
      command: 'Да'
    }
  }),
  Keyboard.textButton({
    label: 'Нет',
    payload: {
      command: 'Нет'
    }
  })
])

export const educationLevels = Keyboard.keyboard([
  [Keyboard.textButton({
    label: 'СПО',
    payload: {
      command: 'СПО'
    }
  })],
  [Keyboard.textButton({
    label: 'Бакалавриат',
    payload: {
      command: 'Бакалавриат'
    }
  })],
  [Keyboard.textButton({
    label: 'Специалитет',
    payload: {
      command: 'Специалитет'
    }
  })],
  [Keyboard.textButton({
    label: 'Магистратура',
    payload: {
      command: 'Магистратура'
    }
  })],
  [Keyboard.textButton({
    label: 'Аспирантура',
    payload: {
      command: 'Аспирантура'
    }
  })],
])

export const year = Keyboard.keyboard([
  [Keyboard.textButton({
    label: '1',
    payload: {
      command: '1'
    }
  })],
  [Keyboard.textButton({
    label: '2',
    payload: {
      command: '2'
    }
  })],
  [Keyboard.textButton({
    label: '3',
    payload: {
      command: '3'
    }
  })],
  [Keyboard.textButton({
    label: '4',
    payload: {
      command: '4'
    }
  })],
  [Keyboard.textButton({
    label: '5',
    payload: {
      command: '5'
    }
  })],
  [Keyboard.textButton({
    label: '6',
    payload: {
      command: '6'
    }
  })],
])

export const mainMenu = Keyboard.keyboard([
  [Keyboard.textButton({
    label: '🧭 Записаться на экскурсию',
    payload: {
      command: 'Записаться на экскурсию'
    }
  })],
  [Keyboard.textButton({
    label: '📄 Посмотреть анкету',
    payload: {
      command: 'Посмотреть анкету'
    }
  })],
  [Keyboard.textButton({
    label: '🚪 Выход',
    payload: {
      command: 'Выход'
    }
  })],
])

export const mainMenuUnregistered = Keyboard.keyboard([
  [Keyboard.textButton({
    label: '📄 Создать анкету',
    payload: {
      command: 'Создать анкету'
    }
  })],
  [Keyboard.textButton({
    label: '🚪 Выход',
    payload: {
      command: 'Выход'
    }
  })],
])

export const profileActions = Keyboard.keyboard([
  [Keyboard.textButton({
    label: '📝 Перезаполнить анкету',
    payload: {
      command: 'Перезаполнить анкету'
    }
  })],
  [Keyboard.textButton({
    label: '🏠 Вернуться в главное меню',
    payload: {
      command: 'Вернуться в главное меню'
    }
  })],
])

export const eventsKeyboard = (events: Prisma.eventsUncheckedCreateInput[]): KeyboardBuilder => {
  const keyboard = []
  for (let i = 0; i < events.length; i++) {
    keyboard.push([Keyboard.textButton({
      label: events[i].title + `(${dateToFormatString(events[i].date_time)})`,
      payload: {
        command: events[i].event_id
      }
    })])
  }
  return Keyboard.keyboard(keyboard)
}

export const backHome = Keyboard.keyboard([
  [Keyboard.textButton({
    label: '🏠 Вернуться в главное меню',
    payload: {
      command: 'Вернуться в главное меню'
    }
  })],
])