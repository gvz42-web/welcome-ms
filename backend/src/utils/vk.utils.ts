import {Prisma} from "@prisma/client"

const educationLevels: Record<string, string> = {
  'СПО': 'SPO',
  'Специалитет': 'Spec',
  'Бакалавриат': 'Bach',
  'Магистратура': 'Mag',
  'Аспирантура': 'Asp'
}

function calculateAge(birthday: (Date|string)):number {
  if (typeof birthday === "string") {
    birthday = new Date(birthday)
  }
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function dateToFormatString(date: (Date|string)) {
  if (typeof date === "string") {
    date = new Date(date)
  }
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
}

export const profileView = (user:Prisma.studentsCreateInput):string => {
  return `Ваша анкета:
Имя: ${user.first_name}
Фамилия: ${user.last_name}
Отчество: ${user.middle_name ? user.middle_name : '-'}
Дата рождения: ${dateToFormatString(user.birth_date)} (${calculateAge(user.birth_date)} лет)
${user.is_bfu_student? 'Вы студент БФУ✅' : 'Вы не студент БФУ'}` +
    `${user.is_bfu_student? `\nУровень образования: ` + user.education_level: ''}` +
    `${user.is_bfu_student? `\nНаправление: ` + user.group_name: ''}` +
    `${user.is_bfu_student? `\nКурс: ` + user.year: ''}`
}

export const translateEducationLevel = (educationLevel: string):string => educationLevels[educationLevel]
