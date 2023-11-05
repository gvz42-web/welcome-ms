<script setup lang="ts">
const props = defineProps({
  date: {
    type: [Date, String],
    required: true
  }
})

const months = ['ЯНВ' , 'ФЕВ' , 'МАР' , 'АПР' , 'МАЙ' , 'ИЮН' , 'ИЮЛ' , 'АВГ' , 'СЕН' , 'ОКТ' , 'НОЯ' , 'ДЕК']

const date = computed(() => {
  let date: Date
  if (typeof props.date == "string") {
    date = new Date(props.date)
  } else {
    date = props.date
  }

  return {
    day: date.getDay(),
    month: months[date.getMonth()]
  }
})
</script>

<template>
<div class="date">
  <div class="date__day">
    {{ date.day }}
  </div>
  <div class="date__month">
    {{ date.month }}
  </div>
</div>
</template>

<style scoped lang="sass">
.date
  border: 0.4rem solid $primary
  border-radius: 1rem
  width: fit-content
  text-align: center
  color: $primary
  padding: 0.4rem 2rem 1rem
  font-weight: bold

  &__day
    font-size: 4rem

  &__month
    font-size: 1.8rem
    text-transform: uppercase
</style>