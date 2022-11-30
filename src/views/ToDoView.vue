<script setup>
import TodoInput from "../components/ToDoInput.vue";
import TodoTable from "../components/TodoTable.vue";
import { ref } from "vue";

const toDoList = ref([]);
function addToList(value) {
  toDoList.value.push({ id: toDoList.value.length + 1, text: value });
}

function removeFromList(id) {
  toDoList.value = toDoList.value.filter(function (obj) {
    return obj.id !== id;
  });
}
</script>

<template>
  <div>
    <h3>TODO LIST</h3>
    <todoInput @addToList="(value) => addToList(value)"></todoInput>
    <TodoTable
      :todoList="toDoList"
      @removeItem="(itemId) => removeFromList(itemId)"
    ></TodoTable>
  </div>
</template>