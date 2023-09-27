import {KeyboardBuilder} from "vk-io";

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