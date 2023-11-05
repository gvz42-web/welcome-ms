<script setup lang="ts">

import Icona from "@/components/Icona.vue";

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: false
  }
})

const {text, icon} = props
</script>

<template>
<button>
  <Icona name="sign-plus-bold" class="icon"/>
  {{ text }}
</button>
</template>

<style scoped lang="sass">
button
  padding: 2.4rem 6rem 2.4rem 5rem
  background-color: $primary
  color: #fff
  border-radius: 3rem
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2)
  transition: transform 0.2s ease
  display: flex
  align-items: center

  .icon
    margin-right: 1rem

    font-size: 3rem

  &:hover
    transform: scale(1.1)
</style>