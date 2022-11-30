<script setup>
import { ref } from "vue";

const todoInput = ref();
</script>
<template>
  <div>
    <form @submit.prevent>
      <input type="text" placeholder="hacer la cama" v-model="todoInput" />
      <button type="submit" @click="$emit('addToList', todoInput)">
        &#10003;
      </button>
    </form>
  </div>
</template>e