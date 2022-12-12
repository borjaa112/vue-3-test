<script setup>
import RateUs from "../components/RateUs.vue";
import axios from "axios";
import { ref } from "vue";
import { onMounted } from "vue";

const dogImg = ref("");
onMounted(() => {
  generateImage();
});

function generateImage() {
  axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then((response) => (dogImg.value = response.data.message))
    .catch((error) => console.log(error));
}
</script>
<template>
  <div class="">
    <h1>This is an about page</h1>
  </div>
  <RateUs></RateUs>

  <h1>Random Dog Photo</h1>
  <img :src="dogImg" height="200" />
  <br />
  <button @click="generateImage()">Generate another photo</button>
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
