<script setup>
const props = defineProps(["todoList"]);
</script>

<template>
  <div>
    <ul>
      <li v-for="(todo, index) in props.todoList" :key="index">{{ todo }}</li>
    </ul>
  </div>
</template>