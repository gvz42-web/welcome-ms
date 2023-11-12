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
  type: {
    type: String,
    default: 'text'
  }
})

const updateInput = (event) => {
  emit("update:modelValue", event.target.value);
}
</script>

<template>
    <textarea :placeholder="placeholder" @input="updateInput" v-if="props.type == 'textarea'"></textarea>
    <input v-else :type="props.type" :placeholder="placeholder" @input="updateInput">
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

textarea
  width: 100%
  border-radius: 2rem
  padding: 1.2rem 2rem
  border: 2px solid $light-grey
</style>