<script setup>
import TodoInput from "../components/ToDoInput.vue";
import TodoTable from "../components/TodoTable.vue";
import { ref } from "vue";

const toDoList = ref([]);
function addToList(value) {
  toDoList.value.push(value);
}
</script>

<template>
  <div>
    <h3>TODO LIST</h3>
    <todoInput @addToList="(value) => addToList(value)"></todoInput>
    <TodoTable :todoList="toDoList"></TodoTable>
  </div>
</template>