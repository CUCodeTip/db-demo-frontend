<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const uStore = useUserStore()
</script>

<template>
  <nav
    class="
  min-h-screen py-10 fixed w-full
   flex flex-col
  rounded-tr-3rem rounded-br-3rem
  transition-all duration-1000 ease-in-out
  overflow-hidden
  "
    :class="{
      'w-1/5 bg-gray-700': uStore.loggedInUser,
    }"
  >
    <nav-list />
    <div
      class="flex-0 transition-all duration-1000"
      :class="{ 'flex-1': uStore.loggedInUser }"
    ></div>
    <div class="mx-auto mb-6" :class="{ 'px-5': uStore.loggedInUser }">
      <nav-login />
      <span class="mt-6 block opacity-60">CU CodeTip</span>
    </div>
    <sparks class="-z-1" />
    <wave class="-z-1" />
  </nav>
</template>
