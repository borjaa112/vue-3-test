<script setup>
import { inject, ref } from "vue";
const { user, updateUser } = inject("user");

const userInput = ref();
</script>

<template>
  <div>
    <h2>LOGIN</h2>

    <form @submit.prevent="updateUser(userInput)">
      <label for="user">Usuario</label>
      <input type="text" id="user" placeholder="pepe" v-model="userInput" />
      <br />
      <label for="password">Contraseña</label>
      <input type="password" id="password" placeholder="*****" />
      <br />
      <button type="submit">Loguearse</button>
    </form>
  </div>
</template>