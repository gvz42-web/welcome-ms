<script setup lang="ts">
import {PropType} from "vue";
import {IStudent} from "@/types/student";

const props = defineProps({
  student: {
    type: Object as PropType<IStudent>, // Not IStudent)))))
    required: true
  }
})

const {first_name, last_name, middle_name} = props.student
</script>

<template>
<div class="name">
  {{first_name}} {{last_name}} {{middle_name ? middle_name : ''}}
</div>
</template>

<style scoped lang="sass">

</style>