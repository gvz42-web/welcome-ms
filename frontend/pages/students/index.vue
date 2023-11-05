<script setup lang="ts">

import {IStudent} from "@/types/student";
import Input from "@/components/basic/Input.vue";
import MultipleSelect from "@/components/basic/MultipleSelect.vue";

const {$api} = useNuxtApp()

const {
  data: students,
  pending,
  error
} = await $api.students.getStudents({lazy: true})

const columns = [{
  key: 'first_name',
  label: 'Имя',
  selected: true,
  sortable: true
}, {
  key: 'last_name',
  label: 'Фамилия',
  selected: true,
  sortable: true
},
  {
    key: 'middle_name',
    label: 'Отчество',
    sortable: true
  },
  {
    key: 'is_bfu_student',
    label: 'Student',
    selected: true,
    sortable: true
  }
]

const selectedColumns = ref([...columns])

const q = ref('')
const filteredRows = computed(() => {
  if (!q.value) {
    return students.value
  }
  return students.value.filter((student: IStudent) => {
    return Object.values(student).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase())
    })
  })
})

const open = async (row: IStudent) => {
  await navigateTo('/students/' + row.student_id)
}

</script>

<template>
  <div>
    <div class="control">
      <Input v-model="q" placeholder="Поиск..."/>
      <MultipleSelect placeholder="Столбцы" :items="columns" v-model="selectedColumns"/>
    </div>

    <div class="table">
      <UTable :columns="selectedColumns" :rows="filteredRows" :loading="pending" @select="open">
        <template #is_bfu_student-header="{ header }">
          Студент
        </template>
        <template #is_bfu_student-data="{ row }">
          {{ row.is_bfu_student ? 'Студент' : "Не студент" }}
        </template>
      </UTable>
    </div>
  </div>

</template>

<style scoped lang="sass">
.table
  padding: 2rem
  font-size: 2rem
  display: block

  @include template-item

.control
  @include template-item
  display: flex
  justify-content: space-between
  align-items: center


</style>