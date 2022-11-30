<script setup>
import { useCounterStore } from "../stores/counter.js";
const store = useCounterStore();
</script>

<template>
  <div>
    <h1>Contador</h1>

    Contador normal
    {{ store.count }}
    <br />
    <br />
    contador doble
    {{ store.doubleCount }}
    <br />
    <br />
    <button @click="store.increment">Incrementar</button>
    <button @click="store.decrease">Desincrementar</button>
  </div>
</template>