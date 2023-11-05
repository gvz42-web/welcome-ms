<script setup lang="ts">
import {PropType} from "vue";

type IStudentStatus = {
  is_visited: boolean,
  is_approved: boolean
}

type IStatus = {
  text: string,
  class: string
}

const props = defineProps({
  studentStatus: {
    type: Object as PropType<IStudentStatus>,
    required: true
  }
})

const statuses : {
  NOT_APPROVED: IStatus,
  NOT_VISITED: IStatus,
  VISITED: IStatus
} = {
  NOT_APPROVED: {
    text: "Не прошел отбор",
    class: "not-approved"
  },
  NOT_VISITED: {
    text: "Не пришёл",
    class: "not-visited"
  },
  VISITED: {
    text: "Посетил",
    class: "visited"
  }
}

const status = computed(() => {
  if (!props.studentStatus.is_approved) {
    return statuses.NOT_APPROVED
  }
  if (props.studentStatus.is_visited) {
    return statuses.VISITED
  } else {
    return statuses.NOT_VISITED
  }
})
</script>

<template>
<div class="status" :class="status.class">
{{ status.text }}
</div>
</template>

<style scoped lang="sass">
.status
  width: fit-content
  padding: 1rem 2rem
  border-radius: $item-border-radius
  border: 2px solid black

  &.not-approved
    border-color: $waiting
    color: $waiting

  &.not-visited
    border-color: $dark-grey
    color: $dark-grey

  &.visited
    border-color: $primary
    color: $primary

</style>