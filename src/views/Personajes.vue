<script setup>
// import { httpRequest } from "../services/httpRequest";
import { GetCharactersHandler } from "../application/GetCharactersHandler";
import { GetCharacterQuery } from "../application/GetCharacterQuery";

import { AxiosHTTPRquester } from "../infrastructure/HTTPRequester/AxiosHTTPRquester";
import { FetchHTTPRequester } from "../infrastructure/HTTPRequester/FetchHTTPRequester";
import { ref, onMounted } from "vue";
const characters = ref("");
onMounted(async () => {
  // axios.get("https://rickandmortyapi.com/api/character/").then((data) => {
  //   characters.value = data.data.results;
  // });

  // httpRequest
  //   .getByFetch("https://rickandmortyapi.com/api/character/")
  //   .then((data) => {
  //     characters.value = data.results;
  //   });

  const request = new GetCharactersHandler(new FetchHTTPRequester());
  request
    .handle(new GetCharacterQuery("https://rickandmortyapi.com/api/character/"))
    .then((data) => (characters.value = data.results));
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
      <img :src="character.image" :alt="'Imagen de ' + character.name" />
      <p>{{ character.name }}</p>
    </div>
  </div>
</template>