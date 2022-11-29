<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import { ref } from "vue";
import ChangeColor from "../components/ChangeColor.vue";
import RateUs from "../components/RateUs.vue";
const color = ref("blue");

function changeBackground(param1) {
  color.value = param1;
}
</script>

<template>
  <div :style="{ backgroundColor: color }">
    <ChangeColor @nextColor="changeBackground" />
  </div>
  <div>
    <!-- <h2>Rate us</h2> -->

    <RateUs>Rate Us</RateUs>
    <router-link to="/about">Hola</router-link>
    <!-- {{ reviews }} -->
  </div>
</template>
