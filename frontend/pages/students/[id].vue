<script setup lang="ts">
import {IStudentWEvents} from "@/types/merged";
import Date from "@/components/basic/Date.vue";
import VkButton from "@/components/basic/VkButton.vue";

const route = useRoute()
const {$api} = useNuxtApp()

const {
  data: student ,
  pending,
  error
} : {
  data: IStudentWEvents,
  pending: boolean,
  error: any
} = await $api.students.getStudent(Number(route.params.id), {lazy: true})

const columns = [
  {
    key: 'date_time',
    label: 'Дата',
    sortable: true,
  },
  {
    key: 'type',
    label: 'Мероприятие',
    sortable: true,
  },
  {
    key: 'title',
    label: 'Название'
  },
  {
    key: 'is_approved',
    label: 'Статус'
  }

]

</script>

<template>
  <div>
    <div class="student" v-if="!pending">
      <div class="student__header">
        <h1 class="student__name">
          {{student.last_name + ' ' + student.first_name + '\n' + student.middle_name }}
        </h1>
        <div class="student__contact">
          <NuxtLink :to="'tel:' + student.phone_number" class="call-button">
            <Icona name="phone-fill"/>
          </NuxtLink>
          <VkButton :peer_id="student.peer_id"/>
        </div>

      </div>
    </div>

    <div class="student__info">
      <template v-if="student.is_bfu_student">
        <div class="student__info__year">Курс: {{ student.year }}</div>
        <div class="student__info__group">Направление: {{ student.group_name }} ({{ student.education_level }})</div>
      </template>
      <div class="student__info__birth-date">Дата рождения: {{ student.birth_date }}</div>
      <div class="student__info__birth-date" v-if="student.is_foreign">Иностранный гражданин</div>
    </div>

    <div class="dashboard">
      <div class="dashboard__item visited">
        <div class="number">
          {{ student.events.filter(e => e.is_visited).length }}
        </div>
        <div class="label">посещено</div>
      </div>
      <div class="dashboard__item visited">
        <div class="number">
          {{ student.events.length }}
        </div>
        <div class="label">заявки</div>
      </div>
      <div class="dashboard__item visited">
        <div class="number">
          {{ student.events.filter(e => !e.is_visited && e.is_approved).length }}
        </div>
        <div class="label">неявок</div>
      </div>
    </div>

    <div class="table">
        <UTable :columns="columns" :rows="student.events" :loading="pending" >
          <template #date_time-data="{ row }">
            <Date :date="row.date_time" />
          </template>
          <template #is_approved-data="{ row }">
            <EventStudentStatus :student-status="{is_approved: row.is_approved, is_visited: row.is_visited}"/>
          </template>
        </UTable>
      </div>
    </div>

</template>

<style scoped lang="sass">
.student
  @include template-item

  &__header
    @include flex-space-between

  &__contact
    display: flex
    gap: 20px

    .call-button
      background-color: $primary
      padding: 0.8rem 2rem 1.2rem
      color: white
      border-radius: $button-border-radius

  &__info
    @include template-item

  &__name
    font-size: 4.2rem
    font-weight: bold

.dashboard
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-template-rows: 1fr

  &__item
    @include template-item
    height: 24rem
    @include flex-center
    flex-direction: column

    .number
      font-size: 7rem
      color: $primary
      font-weight: bold

    .label
      font-size: 3rem

    &.visited
      font-size: 6rem

.table
  padding: 2rem
  font-size: 2rem
  display: block

  @include template-item
</style>