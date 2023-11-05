<script setup lang="ts">

import Sidebar from "~/components/Sidebar.vue";
</script>

<template>
  <div class="layout">
    <div class="menu">
      <Sidebar />
    </div>
    <div class="content">
      <slot />
    </div>
  </div>

</template>

<style scoped lang="sass">
.layout
  display: grid
  grid-template-columns: 300px auto
  grid-template-rows: 100vh
  grid-template-areas: 'sidebar main'

  header
    @include template-item
    display: flex
    justify-content: space-between
    align-items: center

    .page__title
      font-size: 3rem
      font-weight: bold

    .some
      @include circle(4rem)
      background-color: $light-grey
  
  .menu
    grid-area: sidebar
    @include template-item

  .content
    grid-area: main
    overflow: auto
</style>