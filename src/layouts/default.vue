<script setup lang="ts">
import { useControlStore } from '~/stores/control'
import { useUserStore } from '~/stores/user'

const control = useControlStore()
const uStore = useUserStore()
</script>

<template>
  <div
    class="
  min-h-full
  bg-gray-900 text-white
  flex
  "
  >
    <Nav />
    <div class="px-15 py-10 w-full">
      <h1
        v-show="uStore.loggedInUser"
        class="text-center mb-5"
      >
        {{ control.activeItem }}
      </h1>
      <router-view v-show="uStore.loggedInUser" />
    </div>
  </div>
</template>
