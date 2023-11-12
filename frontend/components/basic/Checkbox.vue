<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: 'Чекбокс'
  }
})

const isChecked = ref(false)

const toggle = () => {
  isChecked.value = !isChecked.value
}
</script>

<template>
  <div class="checkbox-wrapper">
    <div class="checkbox" @click="toggle" :class="{'checked' : isChecked}">
      <div class="checkbox__circle">
      </div>
    </div>
    <div class="label" :class="{'checked' : isChecked}">
      {{ props.label }}
    </div>
  </div>

</template>

<style scoped lang="sass">
.checkbox-wrapper
  display: flex
  gap: 4rem

.label
  color: $light-grey
  &.checked
    color: inherit


.checkbox
  border-radius: 1.5rem
  background-color: $light-grey

  width: 5rem
  height: 3rem
  padding: 0.3rem

  cursor: pointer

  position: relative
  transition: background-color 0.2s ease

  &__circle
    border-radius: 50%
    background-color: white
    height: 2.4rem
    width: 2.4rem

    transition: transform 0.2s ease

  &.checked
    background-color: $primary

    & .checkbox__circle
      transform: translateX(2rem)
</style>