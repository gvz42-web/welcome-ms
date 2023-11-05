<script setup lang="ts">
const props = defineProps({
  peer_id: {
    type: Number,
    required: true
  }
})

const isOpen = ref(false)
</script>

<template>
  <div class="vk">
    <button @click.prevent="isOpen = !isOpen">
    VK
      <Icona name="arrow-down-2-fill"/>
    </button>
    <div class="vk__actions" :class="{open: isOpen}">
      <NuxtLink :to="'https://vk.com/id' + peer_id" class="vk__actions__item" target="_blank">
        Открыть ВК
      </NuxtLink>
      <NuxtLink :to="'https://vk.com/gim139660475?sel=' + peer_id" target="_blank" class="vk__actions__item">Открыть диалог</NuxtLink>
    </div>
  </div>


</template>

<style scoped lang="sass">
.vk
  position: relative
  button
    background-color: $primary
    padding: 1rem 8rem
    color: white
    border-radius: $button-border-radius

  &__actions
    position: absolute
    width: 100%
    display: none
    z-index: 100
    margin-top: 10px
    background-color: white
    border-radius: $button-border-radius
    padding: 2rem 2rem
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2)

    @include slide-animation

    &.open
      display: block

    &__item
      display: flex
      justify-content: space-between
      align-items: center
      padding: 0.6rem 1.2rem
      border-radius: 1rem
      cursor: pointer

      &:hover
        background-color: $light-grey
</style>