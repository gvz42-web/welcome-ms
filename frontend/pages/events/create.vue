<script setup lang="ts">

import Input from "@/components/basic/Input.vue";
import Checkbox from "@/components/basic/Checkbox.vue";
</script>

<template>
<div class="create__event">
  <div class="template-item">
    <h1>Новое мероприятие</h1>
  </div>
  <div class="main template-item">
    <h2>Мероприятие</h2>
    <div class="row">
      <Input placeholder="Тип мероприятия" />
      <Input placeholder="Название мероприятия"/>
    </div>
  </div>
  <div class="when template-item">
    <h2>Дата</h2>
    <div class="row">
      <Input type="date"/>
      <Input type="time"/>
    </div>
  </div>
  <div class="description template-item">
    <h2>Описание</h2>
    <Input type="textarea"/>
  </div>
  <div class="params template-item">
    <h2>Параметры</h2>
    <div class="row">
      <Checkbox label="Только студенты БФУ"/>
      <Checkbox label="Только граждане РФ"/>
    </div>
  </div>
</div>
</template>

<style scoped lang="sass">
.row
  display: flex
  gap: 40px
  margin: 32px 0
</style>