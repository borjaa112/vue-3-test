<script setup>
import RateUs from "../components/RateUs.vue";
import { onMounted } from "vue";

onMounted(() => {
  console.log("Hola");
});
</script>
<template>
  <div class="">
    <h1>This is an about page</h1>
  </div>
  <RateUs></RateUs>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
