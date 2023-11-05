<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true
  }
})
const iconName = 'i-iconamoon-' + props.name
</script>

<template>
<Icon :name="iconName"/>
</template>

<style scoped lang="sass">

</style>