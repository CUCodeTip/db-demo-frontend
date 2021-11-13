<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const uStore = useUserStore()
</script>

<template>
  <nav
    class="
  min-h-screen py-10
  flex flex-col justify-between
  bg-gray-700
  rounded-tr-3rem rounded-br-3rem
  transition-all duration-1000 ease-in-out
  "
    :class="{
      'w-25rem': uStore.loggedInUser,
      'w-35rem': !uStore.loggedInUser
    }"
  >
    <nav-list />
    <nav-login />
  </nav>
</template>

<style>

</style>
