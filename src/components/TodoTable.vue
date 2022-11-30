<script setup>
const props = defineProps(["todoList"]);
</script>

<template>
  <div>
    <ul>
      <li v-for="todo in props.todoList" :key="todo.id">
        {{ todo.text }}<button @click="$emit('removeItem', todo.id)">x</button>
      </li>
    </ul>
  </div>
</template>