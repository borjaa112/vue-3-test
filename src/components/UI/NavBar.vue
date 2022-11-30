<script setup>
import { inject } from "@vue/runtime-core";
import { useLoguedUserStore } from "../../stores/loguedUser";

// import { router } from "vue";
const { user, updateUser } = inject("user");
const loguedUser = useLoguedUserStore();
</script>

<template>
  <div class="navbar">
    <hr />
    <router-link to="/">Inicio </router-link>
    <router-link to="/about"> About</router-link>
    <router-link to="/login"> login</router-link>
    <router-link to="/counter"> counter</router-link>
    <router-link to="/todo"> todoList</router-link>

    <hr />
  </div>
  Provider Logued User: {{ user }}
  <br />
  Store Logued User: {{ loguedUser.user }}
</template>