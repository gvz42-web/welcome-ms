<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  placeholder: {
    type: String,
    default: 'Введите...'
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
})

const updateInput = (event) => {
  emit("update:modelValue", event.target.value);
}
</script>

<template>
  <input type="text" :placeholder="placeholder" @input="updateInput">
</template>

<style scoped lang="sass">
input
  border-radius: 2rem
  padding: 0.8rem 2rem
  border: 2px solid $light-grey
  @include item-hover


  &:focus
    border: 2px solid $primary
    outline: none
    box-shadow: 0 0 5px opacify($primary, 0.1)
</style>