<script setup lang="ts">

import Icona from "@/components/Icona.vue";
</script>

<template>
  <div class="icon__wrapper">
    <Icona name="discover-bold" class="icon__item"/>
  </div>
</template>

<style scoped lang="sass">
.icon__wrapper
  width: 5rem
  height: 5rem
  color: #725039
  border-radius: 50%
  background-color: #d9986c

  font-size: 3rem


  @include flex-center
  @include item-shadow

</style>