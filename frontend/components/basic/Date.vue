<script setup lang="ts">
const props = defineProps({
  date: {
    type: [Date, String],
    required: true
  }
})

const months = ['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь']

const date = computed(() => {
  let date: Date
  if (typeof props.date == "string") {
    date = new Date(props.date)
  } else {
    date = props.date
  }

  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
})

</script>

<template>
<div class="date">
  {{date}}
</div>
</template>

<style scoped lang="sass">

</style>