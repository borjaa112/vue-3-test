<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
const characters = ref("");
onMounted(async () => {
  axios.get("https://rickandmortyapi.com/api/character/").then((data) => {
    characters.value = data.data.results;
  });
});
</script>

<template>
  <div>
    <h1>Personajes</h1>
    <div
      v-for="character in characters"
      :key="character.id"
      style="float: left; margin-right: 30px"
    >
      <img :src="character.image" alt="" />
      <p>{{ character.name }}</p>
    </div>
  </div>
  <button @click="() => $router.push({ query: 'vvv' })">aa</button>
</template>