<script setup>
import { inject, ref } from "vue";
import { useLoguedUserStore } from "../stores/loguedUser";
const { user, updateUser } = inject("user");
const loguedUser = useLoguedUserStore();
function updateUserNames(userInput) {
  updateUser(userInput);
  loguedUser.setUser(userInput);
}

const userInput = ref();
</script>

<template>
  <div>
    <h2>LOGIN</h2>

    <form @submit.prevent="updateUserNames(userInput)">
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