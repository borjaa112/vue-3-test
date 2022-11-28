<script setup>
import { ref } from "vue";
const color = ref("");
const emit = defineEmits(["nextColor"]);

function changeColor() {
  emit("nextColor", color.value);
}
</script>

<template>
  <div>
    <!-- <button @click="changeColor">Change Color</button> -->
    <form @submit.prevent="changeColor">
      <div>
        <input type="text" v-model="color" />
        <button type="submit">enviar</button>
      </div>
    </form>
  </div>
</template>