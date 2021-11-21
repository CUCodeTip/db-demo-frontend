<script setup lang="ts">
import { useControlStore } from '~/stores/control'
import { useUserStore } from '~/stores/user'

const control = useControlStore()
const uStore = useUserStore()
</script>

<template>
  <div class="min-h-full bg-gray-900 text-white flex">
    <Nav class="z-1" />
    <div
      class="w-full pl-1/5 opacity-0 transition-opacity delay-800 duration-1000"
      :class="{ 'opacity-100': uStore.loggedInUser }"
    >
      <div class="p-10">
        <h1 class="text-center mb-5">
          {{ control.activeItem }}
        </h1>
        <router-view />
      </div>
    </div>
  </div>
</template>
