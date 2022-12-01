<script setup>
import { ref } from "vue";
import InputBase from "../components/baseComponents/InputBase.vue";
const name = ref("");
const rating = ref("");
const reviews = ref([]);

function sendFeedback() {
  reviews.value.push({
    id: reviews.value.length + 1,
    name: name.value,
    rating: rating.value,
  });
}
</script>

<template>
  <div>
    <h2><slot /></h2>
    <form @submit.prevent="sendFeedback">
      <div>
        <InputBase type="text" placeholder="nombre" v-model="name" />
        Estrellas
        <select name="" id="" v-model="rating">
          <optgroup>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </optgroup>
        </select>
      </div>
      <button type="submit">enviar</button>
    </form>
  </div>

  <p v-for="(review, index) in reviews.reverse()" :key="index">
    {{ review.name }} ha puntuado esta pagina web con
    {{ review.rating }} &#11088;
  </p>
</template>