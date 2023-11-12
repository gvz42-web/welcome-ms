<script setup lang="ts">
import {IEventsWStudents} from "@/types/merged";
import Date from "@/components/basic/Date.vue";
import Name from "@/components/basic/Name.vue";

const route = useRoute()
const {$api} = useNuxtApp()

const {
  data: event,
  pending,
  error
} : {
  data: IEventsWStudents,
  pending: boolean,
  error: any
} = await $api.events.getEvent(Number(route.params.id), {lazy: true})

const columns = [
  {
    key: 'date_time',
    label: 'Дата и время записи',
    sortable: true,
  },
  {
    key: 'first_name',
    label: 'Имя',
    sortable: true,
  },
  {
    key: 'is_approved',
    label: 'Статус'
  }

]
</script>

<template>
  <div v-if="!pending">
    <div class="event">
      <div class="event__header">
        <div class="event__title">
          <EventIcon />
          {{ event.title }}
        </div>
        <div class="event__date"><Date :date="event.date_time"/></div>
      </div>

    </div>

    <div class="table">
      <UTable :columns="columns" :rows="event.students" :loading="pending" >
        <template #date_time-data="{ row }">
          <Date :date="row.created_at" :show-time="true"/>
        </template>
        <template #is_approved-data="{ row }">
          <EventStudentStatus :student-status="{is_approved: row.is_approved, is_visited: row.is_visited}"/>
        </template>
        <template #first_name-data="{ row }">
          <Name :student="row"/>
        </template>
      </UTable>
    </div>
  </div>

</template>

<style scoped lang="sass">
.event
  &__header
    @include template-item
    @include flex-space-between

  &__title
    display: flex
    gap: 40px
    font-size: 3.2rem
    font-weight: bold

.table
  width: 100%
  display: block
  padding: 2rem
  font-size: 2rem

  @include template-item
</style>