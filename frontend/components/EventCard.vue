<script setup lang="ts">
import EventIcon from "~/components/EventIcon.vue";
import {PropType} from "vue";
import {IEvent} from "@/types/event";

const props = defineProps({
  event: {
    type: Object as PropType<IEvent>,
    required: true
  }
})

const openEvent = async () => {
  await navigateTo("/events/" + props.event.event_id);
}
</script>

<template>
<div class="card" @click="openEvent">
  <div class="card__header">
    <EventIcon/>
    <EventStatus />
  </div>
  <div class="card__title">
    {{ props.event.title }}
  </div>
  <p class="card__description">
    {{ props.event.description}}
  </p>
  <EventDate :date="props.event.date_time"/>
</div>
</template>

<style scoped lang="sass">
.card
  background-color: #fff
  @include template-item
  transition: transform 0.2s ease

  &:hover
    transform: scale(1.04)
    cursor: pointer

  .card__header
    margin-bottom: 2rem
    display: flex
    justify-content: space-between
    align-items: center

  .card__title
    font-size: 2.8rem
    font-weight: bold
    line-height: 1.2

    margin-bottom: 2rem

  .card__description
    line-height: 1.1
    text-align: justify
    font-size: 1.6rem

    margin-bottom: 2rem

  .card__date
    display: flex
    align-items: center
</style>