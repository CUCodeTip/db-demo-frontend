<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const uStore = useUserStore()
</script>

<template>
  <nav
    class="
  min-h-screen py-10 fixed
  justify-between flex flex-col
  bg-gray-700 w-1/3
  rounded-tr-3rem rounded-br-3rem
  transition-all duration-1000 ease-in-out
  overflow-hidden
  "
    :class="{
      'w-1/5': uStore.loggedInUser,
    }"
  >
    <nav-list />
    <div class="px-5">
      <nav-login />
      <span class="mt-6 block opacity-60">CU CodeTip</span>
    </div>
    <sparks class="-z-1" />
    <wave class="-z-1" />
  </nav>
</template>
