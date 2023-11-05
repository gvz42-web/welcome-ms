<script setup lang="ts">

import ButtonMain from "~/components/ButtonMain.vue";
import {IEvent} from "@/types/event";
const {$api} = useNuxtApp()

const {
  data: events ,
  pending,
  error
} : {
  data: IEvent[],
  pending: boolean,
  error: any
} = await $api.events.getAllEvents({lazy: true})
</script>

<template>
  <div class="events">
    {{events}}
    <div class="events__list">
      <EventCard v-for="event in events" :event="event"/>
    </div>
    <ButtonMain text="Создать" icon="sign-plus-bold" class="button-bottom"/>
  </div>
</template>

<style scoped lang="sass">
.events__list
  display: grid
  grid-template-columns: repeat(3, 1fr)
</style>