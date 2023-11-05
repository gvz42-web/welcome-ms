<script setup lang="ts">

import Icona from "@/components/Icona.vue";

const menuItems = [
  {
    title: 'Главная',
    route: '/',
    icon: 'home-bold'
  },
  {
    title: 'Мероприятия',
    route: '/events',
    icon: 'apps-fill'
  },
  {
    title: 'Студенты',
    route: '/students',
    icon: 'profile-circle-fill'
  }
]
</script>

<template>
<div>
  <div class="menu">
      <NuxtLink :to="item.route" active-class="menu__item-active" class="menu__item" v-for="item of menuItems" >
        <Icona :name="item.icon" />
        {{ item.title }}
      </NuxtLink>
  </div>
</div>
</template>

<style scoped lang="sass">
.menu
  color: $dark-grey
  .menu__item
    display: flex
    align-items: center
    border-radius: $item-border-radius
    width: 100%
    padding: 1rem 2.6rem
    margin-bottom: 1rem

    transition: background-color 0.2s ease

    .icon
      margin-right: 1rem
      font-size: 2.2rem

    &:hover
      background-color: $light-grey

    &-active
      color: #fff
      background-color: $primary
      @include item-shadow

      &:hover
        background-color: $primary

</style>