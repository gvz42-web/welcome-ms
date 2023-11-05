<script setup lang="ts">

import {PropType} from "vue";
import Icona from "@/components/Icona.vue";

interface item {
  label: String,
  key: String | Number,
  selected?: boolean,
  sortable?: boolean
}

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  placeholder: {
    type: String,
    default: 'Выбор'
  },
  items: {
    type: Array as PropType<item[]>,
    required: true
  },
  default: {
    type: Array,
    default: []
  },
  modelValue: {
    type: Array as PropType<item[]>,
    required: true
  }
})

const isMenuOpen = ref(false)

const selectedColumns = ref(props.modelValue)

const openMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

emit("update:modelValue", selectedColumns.value.filter(e => e.selected));

const changeSelected = (key: String | Number) => {
  selectedColumns.value.filter(e => {
    if (e.key == key) {
      e.selected = !e.selected
    }
    return e
  })
  console.log(selectedColumns.value)
  emit("update:modelValue", selectedColumns.value.filter(e => e.selected));
}

const isSelected = (item: item) => selectedColumns.value.filter((e) => e.key === item.key).length > 0
</script>

<template>
  <div class="select">
    <div class="select__button" @click="openMenu" :class="{open:isMenuOpen}">
      <div class="select__button__text">{{ placeholder }}</div>
      <Icona name="arrow-down-2-bold" />
    </div>
    <div class="select__menu" :class="{open:isMenuOpen}">
      <div class="select__menu__item" v-for="item in items" @click="changeSelected(item.key)">
        {{ item.label }}
        <Icona name="check-bold" v-if="item.selected"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.select
  position: relative

  &__button
    border: 2px solid $light-grey
    border-radius: 2rem
    width: 16rem
    @include flex-space-between
    padding: 1rem 2rem
    cursor: pointer
    user-select: none
    @include item-hover

    .icon
      transition: transform 0.4s ease

      font-size: 2rem

    &.open
      border: 2px solid $primary
      box-shadow: 0 0 5px opacify($primary, 0.1)

      .icon
        transform: rotate(180deg)



  &__menu
    position: absolute
    width: 100%
    z-index: 100
    margin-top: 10px

    padding: 1rem 1rem
    background-color: white
    border-radius: 1rem
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2)
    display: none

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